import * as actionTypes from './actionTypes';

import axios from '../../axios-timer';

// SET TIMER
export const setTimerStart = () => {
    return {
        type: actionTypes.SET_TIMER_START
    };
};

export const setTimerSuccess = (timerVals) => {
    //console.log(timerVals);
    return {
        type: actionTypes.SET_TIMER_SUCCESSS,
        vals: timerVals
    };
};

export const setTimerFail = (error) => {
    console.log(error);
    return {
        type: actionTypes.SET_TIMER_FAIL,
        error: error
    };
};

export const setTimer = () => {
    return dispatch => {
        dispatch(setTimerStart());
        axios.get('/timer.json')
            .then(response => {                               
                dispatch(setTimerSuccess(response.data));
            })
            .catch(err => {
                dispatch(setTimerFail(err));
            });
    };
};

// UPDATE TIMER VALS

export const addToTimerControl = (type) => {
    return {
        type: actionTypes.ADD_TO_TIMER_CONTROL,
        ctrlType: type
    };
};

export const removeFromTimerControl = (type) => {
    return {
        type: actionTypes.SUBTRACT_FROM_TIMER_CONTROL,
        ctrlType: type
    };
};