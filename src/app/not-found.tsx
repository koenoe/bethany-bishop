import Image from 'next/image';

import ButtonLink from '@/components/ButtonLink';

import NotFoundGif from '@/assets/not-found.gif';
import HomeIcon from '@/assets/home.svg';

export default function NotFoundPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5 p-10 text-center md:gap-10 md:p-20">
      <h1 className="text-3xl md:text-5xl">
        What are you doing here? You silly sausage!
      </h1>
      <Image src={NotFoundGif} alt="" />
      <p className="text-xl leading-relaxed md:text-2xl md:leading-relaxed">
        Come on, let's get you back home.
      </p>
      <ButtonLink href="/" intent="primary">
        <Image src={HomeIcon} alt="" />
        This way
      </ButtonLink>
    </div>
  );
}
