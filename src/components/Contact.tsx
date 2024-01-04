import { HOME_PAGE } from '@/data';
import Block from './Block';
import CopyEmailButton from './CopyEmailButton';

export default function Contact() {
  return (
    <Block>
      <h2 className="mb-6 leading-normal text-secondary md:mb-8 md:leading-normal">
        {HOME_PAGE.contact.title}
      </h2>
      <p className="mb-6 md:mb-8 md:text-lg">{HOME_PAGE.contact.description}</p>
      <CopyEmailButton />
    </Block>
  );
}
