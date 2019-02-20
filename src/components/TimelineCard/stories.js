import React from 'react';
import { storiesOf } from '@storybook/react';

import TimelineCard from '.';

const data = [
    {
        date: '01/10/2019',
        description: 'Start date of your absence changed from March 27th to April 2nd'
    },
    {
        date: '06/04/2018',
        description: 'Start date of your absence changed from March 27th to April 2nd'
    },
    {
        date: '12/2/2018',
        description: 'Approval letter available online'
    },
    {
        date: '12/24/2018',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus eligendi, corrupti accusamus ad saepe necessitatibus vitae enim ex ducimus ab dolorem blanditiis veniam adipisci nam earum quia! Quisquam'
    },
    {
        date: '07/23/2018',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus eligendi, corrupti accusamus ad saepe necessitatibus vitae enim ex ducimus ab dolorem blanditiis veniam adipisci nam earum quia! Quisquam'
    },
    {
        date: '08/12/2018',
        description: 'Send email to advise that you had a document to review'
    },
    {
        date: '01/25/2019',
        description: 'Send email to advise that you had a document to review'
    },
    {
        date: '06/11/2018',
        description: 'Send email to advise that you had a document to review'
    }
];

storiesOf('TimelineCard', module)
    .add('default', () => <TimelineCard data={ data } /> );
