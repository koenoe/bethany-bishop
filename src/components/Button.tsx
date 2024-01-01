import { cva, type VariantProps } from 'class-variance-authority';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const button = cva(
  ['rounded-full', 'px-8', 'py-4', 'font-bold', 'uppercase', 'text-black'],
  {
    variants: {
      intent: {
        primary: ['bg-primary', 'hover:bg-primary/90', '!text-white'],
        secondary: ['bg-secondary', 'hover:bg-secondary/90', '!text-white'],
        neutral: ['bg-gray-200', 'hover:bg-gray-100', '!text-gray-400'],
      },
    },
  },
);

export default function Button({ className, intent, ...props }: ButtonProps) {
  return <button className={button({ intent, className })} {...props} />;
}
