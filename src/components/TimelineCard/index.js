import React, { Component } from 'react';

import LightTitleCard from '../LightTitleCard';
import Timeline from '../Timeline';

import styles from './style.module.scss';

class TimelineCard extends Component {
    render() {
        const {
            className,
            data
        } = this.props;

        return (
            <LightTitleCard bodyClassName={ styles.lightTitleCardBody }
                className={ className }
                title="Timeline"
            >
                <Timeline data={ data } />
            </LightTitleCard>
        );
    }
}

export default TimelineCard;
