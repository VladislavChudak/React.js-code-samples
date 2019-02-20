import {
    BEGIN_FETCH_ABSENCE_DATA,
    FAIL_FETCH_ABSENCE_DATA,
    SUCCESS_FETCH_ABSENCE_DATA
} from './types';

const initialState = {
    data: {
        beginDate: '',
        description: '',
        documents: [],
        endDate: '',
        examiner: [],
        id: '',
        payment: {
            nextPayDate: '',
            payDay: '',
            schedule: []
        },
        status: '',
        timeline: [],
        title: ''

    },
    error: null,
    isLoading: true
};

export default (state = initialState, action) => {
    switch(action.type) {
        case BEGIN_FETCH_ABSENCE_DATA:
            return {
                ...state,
                isLoading: true
            };
        case SUCCESS_FETCH_ABSENCE_DATA:
            return {
                ...state,
                data: action.data,
                isLoading: false
            };
        case FAIL_FETCH_ABSENCE_DATA:
            return {
                ...state,
                error: action.error,
                isLoading: false
            };
        default:
            return state;
    }
};
