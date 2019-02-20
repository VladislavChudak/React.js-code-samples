import gqlClient from '../../graphqlClient';

import {
    BEGIN_FETCH_ABSENCE_DATA,
    FAIL_FETCH_ABSENCE_DATA,
    SUCCESS_FETCH_ABSENCE_DATA
} from './types';

function get(id) {
    return gqlClient.request(
        `
            {
                absence(id: ${ id }) {
                    beginDate,
                    description,
                    documents {
                        action,
                        actionLink,
                        documentType,
                        dueDate,
                        description
                    }
                    endDate,
                    examiner {
                        email,
                        name,
                        phone
                    },
                    id,
                    payment {
                        nextPayDate,
                        payDay,
                        schedule {
                            startDate,
                            endDate,
                            percentage,
                            description
                        }
                    },
                    status,
                    timeline {
                        date,
                        description
                    },
                    title
                }
            }
        `
    );
}

const getData = id => dispatch => {
    dispatch({
        type: BEGIN_FETCH_ABSENCE_DATA
    });

    get(id)
        .then(data => {
            dispatch({
                type: SUCCESS_FETCH_ABSENCE_DATA,
                data: data.absence
            });
        })
        .catch(error => {
            dispatch({
                type: FAIL_FETCH_ABSENCE_DATA,
                error: error.response.errors
            });
        });
};

export default {
    getData
};
