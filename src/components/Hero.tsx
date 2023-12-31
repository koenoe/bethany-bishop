import Logo from './Logo';

export default function Hero() {
  return (
    <div className="w-full bg-secondary p-10 text-white md:p-16">
      <Logo className="mb-8 md:mb-12" />
      <h1 className="mb-8 font-extralight leading-normal md:mb-12 md:max-w-4xl md:text-7xl md:leading-normal">
        Boring prose have no place here.
      </h1>
      <h2 className="text-heading-alt mb-8 md:mb-12 md:text-4xl">
        Copywriting and strategy for unabashed brands.
      </h2>
      <button className="rounded-full bg-primary px-8 py-4 font-bold uppercase text-white hover:bg-primary/90">
        Discover more
      </button>
    </div>
  );
}
