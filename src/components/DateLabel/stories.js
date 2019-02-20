import React from 'react';
import { storiesOf } from '@storybook/react';

import DateLabel from '.';

storiesOf('DateLabel', module)
    .add('default', () =>
        <DateLabel dateLabel="start date"
            text="08/01/2017"
        />
    );
