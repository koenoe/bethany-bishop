import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

export const card = cva(['bg-white', 'md:p-12', 'p-6', 'text-midnight']);

export interface CardProps
  extends React.AllHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {}

export default forwardRef<HTMLDivElement, CardProps>(function Card(
  { className, ...props },
  ref,
) {
  return <div ref={ref} className={card({ className })} {...props} />;
});
