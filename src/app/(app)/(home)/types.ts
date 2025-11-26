import { Category } from '@/types/payload-augment';

export type CustomCategory = Category & {
  subcategories?: Category[];
};
