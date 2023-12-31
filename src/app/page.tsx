import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="flex h-[48px] content-center items-center gap-4">
        <Image
          className="bg-primary"
          src="/logo.svg"
          alt="Logo"
          width={48}
          height={48}
          priority
        />
        <span className="font-logo pt-3 text-3xl leading-none">
          Bethany Bishop
        </span>
      </div>
      <h1 className="text-7xl">Boring prose have no place here.</h1>
      <h2 className="text-heading-alt">
        Copywriting and strategy for unabashed brands
      </h2>
      <p>This is dummy text</p>
    </main>
  );
}
