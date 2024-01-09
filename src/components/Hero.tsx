import { HOME_PAGE } from '@/data';
import Block from './Block';
import Button from './Button';
import Logo from './Logo';

export default function Hero() {
  return (
    <Block intent="secondary">
      <Logo className="mb-10 md:mb-16" />
      <h1 className="mb-8 cursor-default leading-tight md:max-w-4xl md:leading-tight">
        {HOME_PAGE.hero.title}
      </h1>
      <h2 className="text-heading-alt mb-10 cursor-default text-2xl md:mb-16 md:text-4xl">
        {HOME_PAGE.hero.subtitle}
      </h2>
      <div className="flex flex-row gap-4">
        {HOME_PAGE.hero.buttons.map((button) => (
          <Button key={button.label} intent={button.intent}>
            {button.icon}
            {button.label}
          </Button>
        ))}
      </div>
    </Block>
  );
}
