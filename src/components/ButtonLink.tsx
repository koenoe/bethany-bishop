import { type VariantProps } from 'class-variance-authority';
import { button } from './Button';
import Link, { type LinkProps } from 'next/link';

type ButtonLinkProps = LinkProps &
  VariantProps<typeof button> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function ButtonLink({
  className,
  intent,
  ...props
}: ButtonLinkProps) {
  return <Link className={button({ intent, className })} {...props} />;
}
