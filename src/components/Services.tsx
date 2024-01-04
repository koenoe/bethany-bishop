import { HOME_PAGE } from '@/data';
import Block from './Block';
import Service from './Service';

export default function Services() {
  return (
    <Block>
      <h2 className="mb-6 text-secondary md:mb-8">
        {HOME_PAGE.services.title}
      </h2>
      <p className="mb-12 md:text-lg">{HOME_PAGE.services.description}</p>
      <div className="md:flex md:gap-x-32">
        {HOME_PAGE.services.items.map((service) => (
          <Service key={service.title} className="mb-8 md:mb-0" {...service} />
        ))}
      </div>
    </Block>
  );
}
