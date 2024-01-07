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
        'relative pl-16 pt-12 text-justify md:pl-20 md:pt-20',
        className,
      )}
    >
      <Image
        src={icon}
        alt=""
        className={cx(
          'absolute left-0 top-0 w-16 md:w-28' +
            (title === 'Copywriting' ? 'w-12 md:w-24' : ''),
        )}
      />
      <h3 className="text-heading-alt mb-4 text-2xl text-secondary md:text-3xl">
        {title}
      </h3>
      <p className="leading-relaxed">{description}</p>
    </div>
  );
}
