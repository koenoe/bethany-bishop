import { HOME_PAGE } from '@/data';
import Block from './Block';
import Button from './Button';
import Logo from './Logo';

export default function Hero() {
  return (
    <Block intent="secondary">
      <Logo className="mb-8 md:mb-12" />
      <h1 className="mb-8 leading-normal md:mb-12 md:max-w-4xl md:text-7xl md:leading-normal">
        {HOME_PAGE.hero.title}
      </h1>
      <h2 className="text-heading-alt mb-8 md:mb-12 md:text-4xl">
        {HOME_PAGE.hero.subtitle}
      </h2>
      <Button intent="primary">{HOME_PAGE.hero.link.label}</Button>
    </Block>
  );
}
