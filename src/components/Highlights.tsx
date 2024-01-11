import { PROJECTS } from '@/data';

import Block from './Block';
import Card from './Card';
import Button from './Button';
import ButtonLink from './ButtonLink';

export interface Props extends React.AllHTMLAttributes<HTMLDivElement> {
  project: (typeof PROJECTS)[number];
}

export default function Highlights({ project }: Props) {
  return (
    <Block>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {project.highlights.map((highlight) => (
          <Card key={highlight.title}>
            <h3 className="text-heading-alt text-2xl md:text-3xl">
              {highlight.title}
            </h3>
            <p className="my-6 text-xl leading-relaxed">
              {highlight.description}
            </p>
            <ButtonLink
              className="w-full md:w-auto"
              intent="primary"
              href={highlight.button.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {highlight.button.icon}
              {highlight.button.label}
            </ButtonLink>
          </Card>
        ))}
      </div>
    </Block>
  );
}
