import React from 'react';
import { storiesOf } from '@storybook/react';

import TextMedium from '.';

storiesOf('TextMedium', module)
    .add('with children', () =>
        <TextMedium>
            Your Examinar:
        </TextMedium>
    );
