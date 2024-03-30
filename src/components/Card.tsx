import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const card = cva(['bg-white', 'md:p-12', 'p-6', 'text-midnight']);

export interface CardProps
  extends React.AllHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {}

export default function Card({ className, ...props }: CardProps) {
  return <div className={card({ className })} {...props} />;
}
