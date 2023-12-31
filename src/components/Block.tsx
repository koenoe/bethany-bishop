import { cva, type VariantProps } from 'class-variance-authority';

const block = cva(['w-full', 'md:p-16', 'p-10', 'text-black'], {
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

export default function Block({ className, intent, ...props }: BlockProps) {
  return <div className={block({ intent, className })} {...props} />;
}
