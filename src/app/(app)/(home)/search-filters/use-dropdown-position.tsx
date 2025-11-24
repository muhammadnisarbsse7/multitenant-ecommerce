import { RefObject } from 'react';

export const useDropdownPosition = (
  ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>
) => {
  const getDropdownPosition = () => {
    if (!ref.current) return { top: 0, left: 0 };

    const rect = ref.current.getBoundingClientRect();
    const dropdownWidth = 240;

    // Calculate the Initial Position
    let left = rect.left + window.scrollX;
    let top = rect.bottom + window.scrollY;

    // Check if the dropdown would go off the right edge of the viewport
    if (left + dropdownWidth > window.innerWidth) {
      left = rect.right + window.scrollX - dropdownWidth;

      //   if still offscreen aign to the right edge of viewport with some padding
      if (left < 0) {
        left = window.innerWidth - dropdownWidth - 16; // 16px padding
      }
    }
    // Ensure ddropdown does not go off the left edge

    if (left < 0) {
      left = 16;
    }
    return { top, left };
  };
  return { getDropdownPosition };
};
