import Image from 'next/image';
import Block from './Block';
import Button from './Button';

export default function About() {
  return (
    <Block intent="primary">
      <div className="flex flex-col md:flex-row">
        <div className="order-2 md:order-1 md:pr-16">
          <h2 className="mb-6 leading-normal md:mb-8 md:text-6xl md:leading-normal">
            Hiya,
            <br />
            I'm <span className="text-secondary">Beth</span>
          </h2>
          <p className="mb-6 text-lg md:mb-8">
            Fusce vitae facilisis ligula. Vestibulum est leo, commodo ac
            fermentum vitae, porttitor faucibus magna. Curabitur at sapien
            faucibus, placerat enim eu, hendrerit mi. Praesent sagittis est
            nibh, et vulputate purus molestie ac. Phasellus tempor quam in nunc
            vehicula gravida.
          </p>
          <Button intent="secondary">Let's talk, for real!</Button>
        </div>
        <div className="relative order-1 mb-6 w-full justify-self-end md:order-2 md:mb-0">
          <Image
            className="w-full rounded-full object-cover"
            src="https://placekitten.com/g/600/800"
            alt="Beth"
            height={400}
            width={300}
          />
        </div>
      </div>
    </Block>
  );
}
