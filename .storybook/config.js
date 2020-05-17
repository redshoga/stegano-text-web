import '../src/assets/styles/global.scss';
import './storybook.scss';

import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
addDecorator(withKnobs);

import { withA11y } from '@storybook/addon-a11y';
addDecorator(withA11y);

import { addParameters } from '@storybook/react';
addParameters({
  backgrounds: [
    { name: 'transparent', value: 'transparent', default: true },
    { name: 'white', value: '#fff' },
    { name: 'black', value: '#000' },
  ],
});
