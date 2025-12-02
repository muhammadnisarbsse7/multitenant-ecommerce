// import { categoriesRouter } from '@/modules/categories/server/procedures';
import { categoriesRouter } from '@/modules/categories/server/procedures';
import { createTRPCRouter } from '../init';
import { AuthRouter } from '@/modules/auth/server/procedures';
export const appRouter = createTRPCRouter({
  auth: AuthRouter,
  categories: categoriesRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
