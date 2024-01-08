import { HOME_PAGE } from '@/data';
import Block from './Block';
import Service from './Service';

export default function Services() {
  return (
    <Block className="text-center">
      <h2 className="mb-4">{HOME_PAGE.services.title}</h2>
      <p className="mx-auto mb-8 max-w-screen-lg text-xl leading-relaxed md:mb-12 md:text-2xl md:leading-relaxed">
        {HOME_PAGE.services.description}
      </p>
      <div className="lg:flex lg:gap-x-4">
        {HOME_PAGE.services.items.map((service) => (
          <Service
            key={service.title}
            className="mb-8 w-full lg:mb-0 lg:w-1/3"
            {...service}
          />
        ))}
      </div>
    </Block>
  );
}
