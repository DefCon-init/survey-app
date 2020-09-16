import React from 'react';

import { Login } from './Login';

export default {
  title: 'Components/Login',
  component: Login,
};

const Template = (args) => <Login {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};