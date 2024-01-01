import Block from './Block';
import CopyEmailButton from './CopyEmailButton';

export default function Contact() {
  return (
    <Block>
      <h2 className="mb-6 leading-normal text-secondary md:mb-8 md:leading-normal">
        Drop me a line any time.
      </h2>
      <p className="mb-6 md:mb-8 md:text-lg">
        Whether you have a question, a project idea, or just want to say hello,
        I'd love to hear from you. Reach out and let's start a conversation.
      </p>
      <CopyEmailButton />
    </Block>
  );
}
