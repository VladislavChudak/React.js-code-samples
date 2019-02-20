import React from 'react';
import { storiesOf } from '@storybook/react';

import AbsenceInfoCard from '.';

const data = {
    beginDate: '07/17/2017',
    description: 'Paid leave for your own medical condition Paid leave for your own medical condition for your own medical condition.',
    endDate: '08/29/2017',
    examiner: {
        examinerEmail: 'abcJohn@gmail.com',
        examinerName: 'John Doe',
        examinerPhone: '1 888 687 2277'
    },
    id: '1',
    status: 'approved',
    title: 'Disability medical'
};

storiesOf('AbsenceInfoCard', module)
    .add('default', () => (
        <AbsenceInfoCard data={ data } />
    ));
