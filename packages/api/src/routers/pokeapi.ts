import { MainClient, type ChainLink } from 'pokenode-ts';
import { z } from 'zod';

import { publicProcedure, createTRPCRouter } from '../trpc';

export const pokeapi = new MainClient();

interface ChainItem {
  name: string;
}

const flattenChainLink = (chainLink?: ChainLink) =>
  (chainLink?.evolves_to ?? []).reduce(
    (acc: ChainItem[], item): ChainItem[] => {
      const results = [...acc, { name: item.species.name }];
      if (item.evolves_to.length > 0) {
        return results.concat(flattenChainLink(item));
      }
      return results;
    },
    []
  );

export const pokeapiRouter = createTRPCRouter({
  listPokemons: publicProcedure
    .input(
      z.optional(
        z.object({
          limit: z.number(),
          offset: z.number(),
        })
      )
    )
    .query(async ({ input }) => {
      const { offset, limit } = input ?? {};

      const list = await pokeapi.pokemon.listPokemons(offset, limit);
      const pokemons = await Promise.all(
        list.results.map(async ({ name }) => {
          const pokemon = await pokeapi.pokemon.getPokemonByName(name);
          return {
            id: pokemon.id,
            name: pokemon.name,
            sprites: pokemon.sprites,
          };
        })
      );

      return { ...list, results: pokemons };
    }),
  getPokemonById: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input }) => {
      const pokemon = await pokeapi.pokemon.getPokemonByName(input.name);
      const species = await pokeapi.pokemon.getPokemonSpeciesByName(
        pokemon.species.name
      );
      const parsedPathname = new URL(species.evolution_chain.url).pathname
        .split('/')
        .filter(Boolean);
      const evolutionId = parsedPathname[parsedPathname.length - 1];
      const evolutionChain = evolutionId
        ? await pokeapi.evolution.getEvolutionChainById(
            parseInt(evolutionId, 10)
          )
        : undefined;

      const ancestors = [
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        species.evolves_from_species?.name,
        species.name,
      ].filter(Boolean);
      const chain = flattenChainLink(evolutionChain?.chain).filter(
        ({ name }) => !ancestors.includes(name)
      );
      const evolutions = await Promise.all(
        chain.map(async (chainItem) => {
          const relative = await pokeapi.pokemon.getPokemonByName(
            chainItem.name
          );
          return { ...chainItem, sprites: relative.sprites };
        })
      );

      return {
        id: pokemon.id,
        name: pokemon.name,
        sprites: pokemon.sprites,
        abilities: pokemon.abilities,
        species: {
          id: species.id,
          name: species.name,
        },
        evolutions,
      };
    }),
});
