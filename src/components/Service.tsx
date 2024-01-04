import { HOME_PAGE } from '@/data';
import { cx } from 'class-variance-authority';
import Image from 'next/image';

type Props = (typeof HOME_PAGE.services.items)[number] &
  React.AllHTMLAttributes<HTMLDivElement>;

export default function Service({
  className,
  title,
  icon,
  description,
}: Props) {
  return (
    <div
      className={cx(
        'relative pl-16 pt-12 text-justify md:pl-24 md:pt-24',
        className,
      )}
    >
      <Image src={icon} alt="" className="absolute left-0 top-0 w-16 md:w-32" />
      <h3 className="text-heading-alt mb-4 text-2xl text-secondary md:text-3xl">
        {title}
      </h3>
      <p className="leading-relaxed">{description}</p>
    </div>
  );
}
