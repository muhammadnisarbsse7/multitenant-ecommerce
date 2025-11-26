import { Category } from '@/types/payload-augment';
import Link from 'next/link';
import { CustomCategory } from '../types';

interface Props {
  category: CustomCategory;
  isOpen: boolean;
  position: { top: number; left: number };
}

export const SubcategoryMenu = ({ category, isOpen, position }: Props) => {
  if (!isOpen || !category.subcategories || category.subcategories.length === 0) {
    return null;
  }

  const backgroundColor = category.color || '#F5F5F5';

  return (
    <div
      className="fixed z-100"
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      <div className="h-3 w-60" />
      <div
        className="w-60 text-black rounded-md overflow-hidden border shadow-[4px_4px_10px_rgba(0,0,0,1)] `-translate-x-[2px] -translate-y-[2px]`"
        style={{ backgroundColor }}
      >
        <div>
          {(category.subcategories ?? [])
            .filter((s): s is Category => typeof s !== 'string')
            .map((subcategory: Category) => (
              <Link
                key={subcategory.slug}
                href={`/${category.slug}/${subcategory.slug}`}
                className="w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center underline font-medium"
              >
                <span>{subcategory.name}</span>
              </Link>
            ))}
        </div>

        {/* <div>
          {category.subcategories?.map((subcategory: Category) => (
            <Link key={subcategory.slug} href={`/`} className="block px-4 py-2 hover:bg-gray-200">
              <span>{subcategory.name}</span>
            </Link>
          ))}
        </div> */}
      </div>
    </div>
  );
};
