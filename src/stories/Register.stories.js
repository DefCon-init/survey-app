import React from 'react';

import { Register } from './Register';

export default {
  title: 'Components/Register',
  component: Register,
};

const Template = (args) => <Register {...args} />;

export const RegisterForm = Template.bind({});