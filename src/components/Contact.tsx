import { HOME_PAGE } from '@/data';
import Block from './Block';
import CopyEmailButton from './CopyEmailButton';

export default function Contact() {
  return (
    <>
      <div id="contact" className="-mt-10 md:-mt-20" />
      <Block className="text-center">
        <h2 className="mb-4">{HOME_PAGE.contact.title}</h2>
        <p className="mx-auto mb-8 max-w-screen-lg text-xl leading-relaxed md:mb-12 md:text-2xl md:leading-relaxed">
          {HOME_PAGE.contact.description}
        </p>
        <CopyEmailButton className="mx-auto" />
      </Block>
    </>
  );
}
