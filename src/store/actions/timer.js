import * as actionTypes from './actionTypes';

import axios from '../../axios-timer';

// SET TIMER
export const setTimerStart = () => {
    return {
        type: actionTypes.SET_TIMER_START
    };
};

export const setTimerSuccess = (timerVals) => {
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
                console.log(err);
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

// START AND PAUSE TIMER

export const startTimer = (id) => {
    return {
        type: actionTypes.START_TIMER,
        timerId: id
    };
};

export const timerDecrement = () => {
    return {
        type: actionTypes.TIMER_DECREMENT
    };
};

export const pauseTimer = () => {
    return {
        type: actionTypes.PAUSE_TIMER
    };
};

export const timeEnd = () => {
    return {
        type: actionTypes.TIME_END
    };
};

export const resetTimer = (mins) => {
    return {
        type: actionTypes.RESET_TIMER,
        minVal: mins
    }
};

// work actions
export const workStart = () => {
    return {
        type: actionTypes.WORK_START
    };
};

export const workEnd = () => {
    return {
        type: actionTypes.WORK_END
    };
};

export const setWorkTime = () => {
    return {
        type: actionTypes.SET_WORK_TIME
    };
}

// break actions
export const breakStart = () => {
    return {
        type: actionTypes.BREAK_START
    };
};

export const breakEnd = () => {
    return {
        type: actionTypes.BREAK_END
    };
};

export const setBreakTime = () => {
    return {
        type: actionTypes.SET_BREAK_TIME
    };
}

// cycle actions
export const cycleStart = () => {
    return {
        type: actionTypes.CYCLE_START
    };
};

export const cycleEnd = () => {
    return {
        type: actionTypes.CYCLE_END
    };
};

export const nextCycle = () => {
    return {
        type: actionTypes.NEXT_CYCLE
    };
};

// round actions
export const roundStart = () => {
    return {
        type: actionTypes.ROUND_START
    };
};

export const roundEnd = () => {
    return {
        type: actionTypes.ROUND_END
    };
};