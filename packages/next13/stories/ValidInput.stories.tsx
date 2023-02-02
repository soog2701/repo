import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ValidInput from '../components/ValidInput';

export default {
  title: 'Components/ValidInput',
  component: ValidInput,
} as ComponentMeta<typeof ValidInput>;

const Template: ComponentStory<typeof ValidInput> = (args) => (
  <ValidInput {...args} />
);

export const Id = Template.bind({});

Id.args = {
  attr: 'id',
};
