import { useState } from 'react';

import Link from 'next/link';

import { Skeleton } from '~/components/Skeleton';
import { PokemonCard } from '~/containers/PokemonCard';
import { trpc } from '~/utils/trpc';

const IndexPage = () => {
  const [page, setPage] = useState(0);
  const [limit] = useState(10);
  const { data, error, isLoading } = trpc.pokeapi.listPokemons.useQuery({
    limit,
    offset: page * limit,
  });

  const pokemons = data?.results ?? [];
  const { count = 0 } = data ?? {};

  if (error?.message) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  const buttonClassName =
    'w-16 h-16 flex flex-initial flex-shrink-0 items-center justify-center cursor-pointer border-none';

  return (
    <div className="flex flex-row flex-nowrap items-center justify-between gap-6">
      <button
        className={buttonClassName}
        data-testid="prev-page"
        onClick={() => {
          setPage((prevState) => prevState - 1);
        }}
        disabled={page === 0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <ul
        className="flex max-w-4xl list-none flex-col flex-wrap items-center justify-center gap-4 p-0 sm:flex-row"
        data-testid="pokemons-list"
      >
        {isLoading &&
          Array(limit)
            .fill(null)
            .map((_, index) => (
              <li key={index}>
                <Skeleton variant="rounded" width={146} height={176} />
              </li>
            ))}
        {!isLoading &&
          pokemons.map(({ id, name, sprites }) => (
            <li key={id} data-testid="pokemons-list-item">
              <Link
                className="text-current no-underline"
                href={`/pokemon/${name}`}
              >
                <PokemonCard name={name} sprites={sprites} />
              </Link>
            </li>
          ))}
      </ul>
      <button
        className={buttonClassName}
        data-testid="next-page"
        onClick={() => {
          setPage((prevState) => prevState + 1);
        }}
        disabled={page * limit > count}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
};

export default IndexPage;
