import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import PaymentScheduleCard from '.';

const data = {
    absenceLink: '/',
    absenceName: 'disability plan',
    absencePayDay: 'second Thursday',

    payment: {
        nextPayDate: '02/08/2018',
        schedule: [
            {
                startDate: '01/29/2018',
                endDate: '02/05/2018',
                percentage: 100,
                text: 'You\'ll need to take vacation to receive your regular salary'
            },

            {
                startDate: '02/05/2018',
                endDate: '02/26/2018',
                percentage: 67
            },

            {
                startDate: '02/26/2018',
                endDate: '03/19/2018',
                percentage: 50
            }
        ]
    }
};

storiesOf('PaymentScheduleCard', module)
    .add('default', () => (
        <BrowserRouter>
            <PaymentScheduleCard data={ data }
                username="John"
            />
        </BrowserRouter>
    ));
