import type { Config } from '../payload-types';

export interface Category {
  id: string;
  name: string;
  slug: string;
  color?: string | null;
  parent?: string | Category | null;
  subcategories?: (string | Category)[] | null;
  createdAt: string;
  updatedAt: string;
}

declare module 'payload' {
  interface GeneratedTypes extends Config {
    collections: Config['collections'] & {
      categories: Category;
    };
  }
}

