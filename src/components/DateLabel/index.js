import React from 'react';

import Tag from '../Tag';

import styles from './styles.module.scss';

const DateLabel = props => {
    const {
        className,
        dateLabel,
        text
    } = props;

    return (
        <div className={ `${ styles.dateLabel } ${ className }` }>
            <span className={ styles.text }>
                { text }
            </span>

            <Tag className={ styles.dateText }
                label={ dateLabel }
            />
        </div>
    );
};

DateLabel.defaultProps = {
    className: ''
};

export default DateLabel;
