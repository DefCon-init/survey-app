import React from 'react';

import { Header } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const HeaderTemplateLoggedIn = Template.bind({});
HeaderTemplateLoggedIn.args = {
    isLoggedIn: true,
};

export const HeaderTemplateLogout = Template.bind({});
HeaderTemplateLogout.args = {
    isLoggedIn: false,
};

export const HeaderTemplateTitle = Template.bind({});
HeaderTemplateTitle.args = {
    isLoggedIn: true,
    title: 'New Survey'
};

export const HeaderTemplateTitleBack = Template.bind({});
HeaderTemplateTitleBack.args = {
    isLoggedIn: true,
    onBack: () => window.history.back(),
    title: 'New Survey'
};