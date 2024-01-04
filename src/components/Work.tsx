import { HOME_PAGE } from '@/data';
import Block from './Block';

export default function Work() {
  return (
    <Block intent="secondary">
      <h2 className="mb-6 leading-normal md:mb-8 md:leading-normal">
        {HOME_PAGE.work.title}
      </h2>
      <p className="md:text-lg">work here</p>
    </Block>
  );
}
