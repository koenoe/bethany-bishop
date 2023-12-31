import Block from './Block';
import Button from './Button';

export default function About() {
  return (
    <Block intent="primary">
      <h2 className="mb-6 leading-normal md:mb-8 md:text-6xl md:leading-normal">
        Hiya,
        <br />
        I'm <span className="text-secondary">Beth</span>
      </h2>
      <p className="mb-6 md:mb-8 md:text-lg">
        Fusce vitae facilisis ligula. Vestibulum est leo, commodo ac fermentum
        vitae, porttitor faucibus magna. Curabitur at sapien faucibus, placerat
        enim eu, hendrerit mi. Praesent sagittis est nibh, et vulputate purus
        molestie ac. Phasellus tempor quam in nunc vehicula gravida.
      </p>
      <Button intent="secondary">Let's talk, for real!</Button>
    </Block>
  );
}
