import { baseProcedure, createTRPCRouter } from '@/trpc/init';
import { Category } from '@/types/payload-augment';

export const categoriesRouter = createTRPCRouter({
  getMany: baseProcedure.query(async ({ ctx }) => {
    const data = await ctx.db.find({
      collection: 'categories' as any,
      depth: 1, //Populate subcategories, subcategories.[0] will be a type of Category
      pagination: false,
      where: {
        parent: {
          exists: false,
        },
      },
      sort: 'name',
    });

    const formattedData = data.docs.map((doc) => ({
      ...doc,
      subcategories: ((doc as any).subcategories?.docs ?? []).map((subdoc: any) => ({
        // Because of depth:1 we are confident doc will be a type of Category
        ...(subdoc as Category),
        subcategories: undefined,
      })),
    }));
    return formattedData;
  }),
});
