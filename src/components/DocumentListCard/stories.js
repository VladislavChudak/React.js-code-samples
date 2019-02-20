import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import DocumentListCard from './index';

const data = {
    documents: [
        {
            action: 'view',
            actionLink: '/',
            documentType: 'pdf',
            dueDate: null,
            description: 'Absence Application'
        }, {
            action: 'view',
            actionLink: '/',
            documentType: 'doc',
            dueDate: null,
            description: 'Absence Packet'
        }, {
            action: 'sign',
            actionLink: '/',
            documentType: 'doc',
            dueDate: null,
            description: 'Health Care Provider Certification'
        }, {
            action: 'sign',
            actionLink: '/',
            documentType: 'pdf',
            dueDate: '08/31/2018',
            description: 'Medical Authorization Relase'
        }, {
            action: 'view',
            actionLink: '/',
            documentType: 'pdf',
            dueDate: null,
            description: 'Approval Letter'
        }
    ],
    uploadLink: '/'
};

storiesOf('DocumentListCard', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={ [ '/' ] }>
            { story() }
        </MemoryRouter>
    ))
    .add('default', () => (
        <DocumentListCard items={ data.documents }
            uploadLink={ data.uploadLink }
        />
    ));
