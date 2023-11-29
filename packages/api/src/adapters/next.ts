import * as trpcNext from '@trpc/server/adapters/next';

import { appRouter } from '../root';

export const trpcNextHandler = trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
