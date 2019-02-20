import React from 'react';

import styles from './styles.module.scss';

const TextMedium = props => {
    const {
        children,
        className,
        text
    } = props;

    return (
        <div className={`${ styles.text } ${ className }`}>
            { text || children }
        </div>
    );
};

TextMedium.defaultProps = {
    className: ''
};

export default TextMedium;
