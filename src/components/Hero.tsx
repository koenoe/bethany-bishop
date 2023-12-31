import Logo from './Logo';

export default function Hero() {
  return (
    <div className="bg-secondary w-full p-10 text-white md:p-16">
      <Logo className="mb-8 md:mb-12" />
      <h1 className="mb-8 font-extralight tracking-tighter md:mb-12 md:max-w-4xl md:text-9xl md:leading-[7.5rem]">
        Boring prose have no place here.
      </h1>
      <h2 className="text-heading-alt mb-8 md:mb-12 md:text-4xl">
        Copywriting and strategy for unabashed brands
      </h2>
      <button className="bg-primary hover:bg-primary/90 rounded-full px-8 py-4 font-bold uppercase text-white">
        Discover more
      </button>
    </div>
  );
}
