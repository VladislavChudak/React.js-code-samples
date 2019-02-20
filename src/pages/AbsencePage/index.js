import React, { Component } from 'react';
import { connect } from 'react-redux';

import AbsenceInfoCard from '../../components/AbsenceInfoCard';
import DocumentListCard from '../../components/DocumentListCard';
import PaymentScheduleCard from '../../components/PaymentScheduleCard';
import TimelineCard from '../../components/TimelineCard';

import actions from './actions';

import styles from './styles.module.scss';

const UPLOAD_LINK = '/';

const username = 'Milan';

class AbsencePage extends Component {
    componentDidMount() {
        const {
            getData,
            match
        } = this.props;

        const { id } = match.params;

        getData(id);
    }

    render() {
        const {
            absenceData,
            isLoading
        } = this.props;

        const {
            documents,
            timeline
        } = absenceData;

        return isLoading
            ? (
                <p>
                    ...loading
                </p>
            )
            : (
                <div className={ styles.absencePage }>
                    <div className={ styles.row }>
                        <div className={ styles.leftColumn }>
                            <AbsenceInfoCard className={ styles.absenceInfoCard }
                                data={ absenceData }
                            />

                            <DocumentListCard className={ styles.documentListCard }
                                items={ documents }
                                uploadLink={ UPLOAD_LINK }
                            />

                            <PaymentScheduleCard data={ absenceData }
                                username={ username }
                            />
                        </div>

                        <div className={ styles.rightColumn }>
                            <TimelineCard className={ styles.timelineCard }
                                data={ timeline }
                            />
                        </div>
                    </div>
                </div>
            );
    }
}

const mapStateToProps = ({ absence }) => ({
    absenceData: absence.data,
    isLoading: absence.isLoading
});


const mapDispatchToProps = dispatch => ({
    getData: id => dispatch(actions.getData(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AbsencePage);
