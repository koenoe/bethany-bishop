import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const block = cva(['w-full', 'md:p-20', 'p-10', 'text-midnight'], {
  variants: {
    intent: {
      primary: ['bg-primary', '!text-white'],
      secondary: ['bg-secondary', '!text-white'],
    },
  },
});

export interface BlockProps
  extends React.AllHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof block> {}

export default function Block({
  className,
  children,
  intent,
  ...props
}: BlockProps) {
  return (
    <div className={block({ intent, className })} {...props}>
      <div className="mx-auto max-w-screen-2xl">{children}</div>
    </div>
  );
}
