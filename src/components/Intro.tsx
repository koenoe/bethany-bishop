import React, { forwardRef } from 'react';

import Block from './Block';
import Card from './Card';
import { cx } from 'class-variance-authority';

type Props = Omit<React.AllHTMLAttributes<HTMLDivElement>, 'title'> &
  Readonly<{
    image: React.ReactElement;
    title: React.ReactNode;
    description: React.ReactElement;
    button?: React.ReactElement;
  }>;

export default forwardRef<HTMLDivElement, Props>(function Intro(
  { button, image, title, description, ...props },
  ref,
) {
  return (
    <Block ref={ref} {...props}>
      <div className="flex flex-col lg:flex-row">
        <div className="relative mb-6 ml-auto w-full lg:mb-0 lg:mr-[-5rem] lg:mt-24 lg:max-w-[375px]">
          {React.cloneElement(image, {
            className: cx(
              'w-full object-cover object-center',
              image.props.className,
            ),
            priority: true,
            placeholder: 'blur',
          })}
        </div>
        <Card className="lg:pl-36 lg:pr-28">
          {typeof title === 'string' ? (
            <h2 className="mb-6 leading-snug md:mb-8">{title}</h2>
          ) : (
            title
          )}
          <div className="mb-6 text-xl leading-relaxed md:mb-8 md:text-2xl md:leading-relaxed [&>p]:mb-4">
            {description}
          </div>
          {button &&
            React.cloneElement(button, {
              className: 'w-full md:w-auto',
            })}
        </Card>
      </div>
    </Block>
  );
});
