import React from 'react';

import { TableView } from './Table';

export default {
  title: 'Components/ResultDetail',
  component: TableView,
};

const Template = (args) => <TableView {...args} />;

export const ResultDetail = Template.bind({});