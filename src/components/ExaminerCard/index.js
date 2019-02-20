import React, { Fragment } from 'react';

import InfoLabel from '../InfoLabel';
import TextMedium from '../TextMedium';

import styles from './styles.module.scss';

const ExaminerCard = props => {
    const {
        examinerEmail,
        examinerName,
        examinerPhone
    } = props;

    return (
        <div className={ styles.examinerCard }>
            <div className={ styles.examiner }>
                <TextMedium
                    className={ styles.examinerNameTitle }
                    text={(
                        <Fragment>
                            Your Examiner:

                            <span className={ styles.examinerName }>
                                { examinerName }
                            </span>
                        </Fragment>
                    )}
                />
            </div>

            <div className={ styles.examinerInfo }>
                <InfoLabel iconName="phone"
                    label={ examinerPhone }
                />
            </div>

            <div className={ styles.examinerInfo }>
                <InfoLabel iconName="envelope"
                    label={ examinerEmail }
                />
            </div>
        </div>
    );
};

export default ExaminerCard;
