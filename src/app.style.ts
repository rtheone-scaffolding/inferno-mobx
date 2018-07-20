import { createComponent } from 'inferno-fela';

export const Button = createComponent(
  props => css`
    background: ${props.color};
    color: white;
  `,
  'button',
  ['onClick']
);

export const AlternateButton = createComponent(
  props => css`
    background: orangered;
  `,
  Button
);
