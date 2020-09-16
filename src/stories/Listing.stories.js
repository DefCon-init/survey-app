import React from 'react';

import { Listing } from './Listing';

export default {
  title: 'Components/Listing',
  component: Listing,
};

const Template = (args) => <Listing {...args} />;

export const HomeTemplateLoading = Template.bind({});
HomeTemplateLoading.args = {
    loading: true,
};

export const HomeTemplateNoSurvey = Template.bind({});
HomeTemplateNoSurvey.args = {
    loading: false,
};

export const HomeTemplateSurveyEmpty = Template.bind({});
HomeTemplateSurveyEmpty.args = {
    loading: false,
    surveys: []
};

export const HomeTemplate = Template.bind({});
HomeTemplate.args = {
    loading: false,
    surveys: [
        {
            id: 1,
            loading: false,
            title: 'Survey 1',
            value: 20,
            description: 'Survey 1 description'
        },
        {
            id: 2,
            loading: false,
            title: 'Survey 1',
            value: 20,
            description: 'Survey 1 description'
        },
        {
            id: 3,
            loading: false,
            title: 'Survey 1',
            value: 20,
            description: 'Survey 1 description'
        },
        {
            id: 4,
            loading: false,
            title: 'Survey 1',
            value: 20,
            description: 'Survey 1 description'
        },
        {
            id: 5,
            loading: false,
            title: 'Survey 1',
            value: 20,
            description: 'Survey 1 description'
        },
        {
            id: 6,
            loading: false,
            title: 'Survey 1',
            value: 20,
            description: 'Survey 1 description'
        }
    ]
};

export const ResultTemplateNoSurvey = Template.bind({});
ResultTemplateNoSurvey.args = {
    loading: false,
    isResult: true,
};

export const ResultTemplateSurveyEmpty = Template.bind({});
ResultTemplateSurveyEmpty.args = {
    isResult: true,
    loading: false,
    surveys: []
};

export const ResultTemplate = Template.bind({});
ResultTemplate.args = {
    isResult: true,
    loading: false,
    surveys: [
        {
            id: 1,
            loading: false,
            title: 'Survey 1',
            value: 20,
            description: 'Survey 1 description'
        },
        {
            id: 2,
            loading: false,
            title: 'Survey 1',
            value: 20,
            description: 'Survey 1 description'
        },
        {
            id: 3,
            loading: false,
            title: 'Survey 1',
            value: 20,
            description: 'Survey 1 description'
        },
        {
            id: 4,
            loading: false,
            title: 'Survey 1',
            value: 20,
            description: 'Survey 1 description'
        },
        {
            id: 5,
            loading: false,
            title: 'Survey 1',
            value: 20,
            description: 'Survey 1 description'
        },
        {
            id: 6,
            loading: false,
            title: 'Survey 1',
            value: 20,
            description: 'Survey 1 description'
        }
    ]
};