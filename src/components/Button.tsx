import { cva, type VariantProps } from 'class-variance-authority';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const button = cva(
  [
    'px-4',
    'py-3',
    'md:px-5',
    'md:py-4',
    'font-bold',
    'text-midnight',
    'md:text-xl',
    'text-sm',
    'inline-flex',
    'items-center',
    'content-center',
    'justify-center',
    'md:gap-4',
    'gap-3',
    '[&>img]:max-h-5',
    '[&>img]:max-w-5',
    '[&>img]:md:max-h-7',
    '[&>img]:md:max-w-7',
    'text-heading-alt',
  ],
  {
    variants: {
      intent: {
        outline: ['!text-white', 'border-2', 'border-white', 'box-content'],
        primary: ['bg-primary', '!text-white'],
        secondary: ['bg-secondary', '!text-white'],
        neutral: ['bg-gray-200', '!text-gray-400'],
      },
    },
  },
);

export default function Button({ className, intent, ...props }: ButtonProps) {
  return <button className={button({ intent, className })} {...props} />;
}
