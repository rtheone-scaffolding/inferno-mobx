import { createComponent } from 'inferno-fela';

export const Button = createComponent(
  (props: { color: string }) => css`
    background: ${props.color};
    color: white;
  `,
  'button',
  ['onClick']
);

export const AlternateButton = createComponent(
  (props: object) => css`
    background: orangered;
  `,
  Button
);
