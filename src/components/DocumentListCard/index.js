import React from 'react';

import DarkTitleCard from '../DarkTitleCard';
import DocumentList from '../DocumentList';
import IconTextLink from '../IconTextLink';

const DocumentListCard = props => {
    const {
        className,
        items,
        uploadLink
    } = props;

    const headerRight = (
        <IconTextLink iconName="upload"
            text="Upload a document"
            to={ uploadLink }
        />
    );

    return (
        <DarkTitleCard className={ `${ className }` }
            headerRight={ headerRight }
            title="Documents"
        >
            <DocumentList items={ items } />
        </DarkTitleCard>
    );
};

DocumentListCard.defaultProps = {
    className: ''
};

export default DocumentListCard;
