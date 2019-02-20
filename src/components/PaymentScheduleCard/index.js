import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import DarkTitleCard from '../DarkTitleCard';
import PayDateLabel from '../PayDateLabel';
import PaymentChart from '../PaymentChart';
import PaymentScheduleLabel from '../PaymentScheduleLabel';
import PaymentScheduleList from '../PaymentScheduleList';
import TextMedium from '../TextMedium';

import routes from '../../helpers/links';
import { sortDataByDateAscending } from '../../helpers/sortDataByDate';

import styles from './styles.module.scss';

class PaymentScheduleCard extends Component {
    render() {
        const {
            className,
            data,
            username
        } = this.props;

        const {
            id,
            payment,
            title
        } = data;

        const {
            nextPayDate,
            payDay,
            schedule
        } = payment;

        const {
            absenceStats: absenceStatsRoute
        } = routes;

        const sortedData = sortDataByDateAscending(schedule);

        const firstDate = sortedData[0].startDate;
        const lastDate = sortedData[sortedData.length - 1].endDate;
        const weeks = lastDate.diff(firstDate, 'week');

        const formattedNextPayDate = moment(nextPayDate).format('MM/DD');

        return (
            <DarkTitleCard className={ className }
                title="Payment Schedule"
            >
                <div className={ styles.cardBody }>
                    <TextMedium className={ styles.cardBodyTitle }>
                        { username }

                        , you are eligible for

                        <span className={ styles.weeks }>
                            { weeks }
                        </span>

                        weeks in your company's

                        <Link className={ styles.absenceLink }
                            to={ absenceStatsRoute(id) }
                        >
                            { title }
                        </Link>
                    </TextMedium>

                    <PaymentChart className={ styles.chart }
                        data={ sortedData }
                    />

                    <PaymentScheduleList className={ styles.list }
                        items={ sortedData }
                    />

                    <div className={ styles.row }>
                        <PaymentScheduleLabel payDay={ payDay } />

                        <PayDateLabel date={ formattedNextPayDate } />
                    </div>
                </div>
            </DarkTitleCard>
        );
    }
}

export default PaymentScheduleCard;
