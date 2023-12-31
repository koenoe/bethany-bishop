import Block from './Block';
import Button from './Button';
import Logo from './Logo';

export default function Hero() {
  return (
    <Block intent="secondary">
      <Logo className="mb-8 md:mb-12" />
      <h1 className="mb-8 leading-normal md:mb-12 md:max-w-4xl md:text-7xl md:leading-normal">
        Boring prose have no place here.
      </h1>
      <h2 className="text-heading-alt mb-8 md:mb-12 md:text-4xl">
        Copywriting and strategy for unabashed brands.
      </h2>
      <Button intent="primary">Discover more</Button>
    </Block>
  );
}
