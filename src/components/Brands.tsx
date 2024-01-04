import { HOME_PAGE } from '@/data';
import Block from './Block';
import Image from 'next/image';

export default function Brands() {
  return (
    <Block className="!pb-0">
      <Image
        src={HOME_PAGE.brands.image.src}
        alt={HOME_PAGE.brands.image.alt}
        className="w-full"
      />
    </Block>
  );
}
