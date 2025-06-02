import { ReactNode } from 'react';

export interface CardGridProps {
  children: ReactNode;
}

export function CardGrid({ children }: CardGridProps) {
  return (
    <div className="w-full max-w-[1600px] mx-auto px-2 sm:px-4">
      <div className="flex flex-nowrap overflow-x-auto gap-4 pb-4 justify-center items-center min-h-[280px] hide-scrollbar">
        {children}
      </div>
    </div>
  );
}