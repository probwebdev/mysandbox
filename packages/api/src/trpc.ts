/**
 * Learn how to create protected base procedures and other things below:
 * @see https://trpc.io/docs/v10/router
 * @see https://trpc.io/docs/v10/procedures
 */
import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

/**
 * Unprotected procedure
 **/
export const publicProcedure = t.procedure;

export const createTRPCRouter = t.router;
