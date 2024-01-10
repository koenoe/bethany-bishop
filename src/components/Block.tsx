import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const block = cva(['w-full', 'md:px-20', 'px-10', 'text-midnight']);

export interface BlockProps
  extends React.AllHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof block> {}

export default function Block({ className, children, ...props }: BlockProps) {
  return (
    <div className={block({ className })} {...props}>
      <div className="mx-auto max-w-screen-2xl">{children}</div>
    </div>
  );
}
