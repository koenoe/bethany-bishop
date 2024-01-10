import { HOME_PAGE } from '@/data';
import Block from './Block';
import Logo from './Logo';
import ButtonLink from './ButtonLink';

export default function Hero() {
  return (
    <Block className="bg-secondary py-10 !text-white md:py-20">
      <Logo className="mb-10 md:mb-16" />
      <h1 className="mb-8 cursor-default leading-tight md:max-w-4xl md:leading-tight">
        {HOME_PAGE.hero.title}
      </h1>
      <h2 className="text-heading-alt mb-10 cursor-default text-2xl leading-relaxed md:mb-16 md:text-4xl md:leading-relaxed">
        {HOME_PAGE.hero.subtitle}
      </h2>
      <div className="flex flex-row gap-4">
        {HOME_PAGE.hero.buttons.map((button) => (
          <ButtonLink
            key={button.label}
            intent={button.intent}
            className="grow text-nowrap md:grow-0"
            href={button.href}
          >
            {button.icon}
            {button.label}
          </ButtonLink>
        ))}
      </div>
    </Block>
  );
}
