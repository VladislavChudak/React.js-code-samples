import React from 'react';
import { storiesOf } from '@storybook/react';

import ExaminerCard from '.';

storiesOf('ExaminerCard', module)
    .add('default', () =>
        <ExaminerCard examinerEmail="abc@xyz.com"
            examinerName="John Doe"
            examinerPhone="1-800-980-1006"
        />
    );
