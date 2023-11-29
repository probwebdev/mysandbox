import { pokeapiRouter } from './routers/pokeapi';
import { createTRPCRouter } from './trpc';

export const appRouter = createTRPCRouter({
  pokeapi: pokeapiRouter,
});

export type AppRouter = typeof appRouter;
