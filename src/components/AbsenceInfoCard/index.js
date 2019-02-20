import React from 'react';

import DateLabel from '../DateLabel';
import ExaminerCard from '../ExaminerCard';
import InfoCard from '../InfoCard';
import TextMedium from '../TextMedium';

import formatDate from '../../helpers/formatDate';

import styles from './styles.module.scss';

const AbsenceInfoCard = props => {
    const {
        className,
        data
    } = props;

    const {
        beginDate,
        description,
        endDate,
        examiner,
        status,
        title
    } = data;

    const {
        email,
        name,
        phone
    } = examiner;

    return (
        <InfoCard className={ className }
            status={ status }
            title={ title }
        >
            <div className={ styles.cardBody }>
                <div className={ styles.row }>
                    <div className={ styles.dates }>
                        <DateLabel className={ styles.dateLabel }
                            dateLabel={ formatDate(beginDate) }
                            text="Start Date:"
                        />

                        <DateLabel className={ styles.dateLabel }
                            dateLabel={ formatDate(endDate) }
                            text="End Date:"
                        />
                    </div>

                    <ExaminerCard examinerEmail={ email }
                        examinerName={ name }
                        examinerPhone={ phone }
                    />
                </div>

                <div className={ styles.details }>
                    <TextMedium className={ styles.detailsTitle }>
                        Details:
                    </TextMedium>

                    <TextMedium className={ styles.detailsText }>
                        { description }
                    </TextMedium>
                </div>
            </div>
        </InfoCard>
    );
};

export default AbsenceInfoCard;
