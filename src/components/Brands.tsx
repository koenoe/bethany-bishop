import { HOME_PAGE } from '@/data';
import Block from './Block';
import Image from 'next/image';

export default function Brands() {
  return (
    <Block>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 lg:mx-48">
        {HOME_PAGE.brands.map((brand) => (
          <div
            key={brand.name}
            className="relative flex aspect-square items-center justify-center bg-white p-6 lg:p-10"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </Block>
  );
}
