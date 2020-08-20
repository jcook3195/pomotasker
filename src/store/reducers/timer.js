import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    vals: [],
    minutes: 25,
    seconds: 0,
    timerOn: false,
    timerId: null,
    loading: false,
    timerEnded: false,
    displayMsg: "Timer is done!"
};

// setting the timer control values
const setTimerStart = (state, action) => {
    return updateObject(state, {loading: true});
};

const setTimerSuccess = (state, action) => {
    return updateObject(state, {
        vals: action.vals,
        loading: false
    });
};

const setTimerFail = (state, action) => {
    return updateObject(state, {loading: false});
};

// changing the values of the timer controls
const addToTimerControl = (state, action) => {
    const updatedControlValue = { [action.ctrlType]: state.vals[action.ctrlType] + 1};
    const updatedCtrlVals = updateObject(state.vals, updatedControlValue);
    const updatedState = {
        vals: updatedCtrlVals,
        minutes: updatedCtrlVals.workTime,
        seconds: 0,
        loading: false
    }

    return updateObject(state, updatedState);
};

const removeFromTimerControl = (state, action) => {
    const updatedControlValue = { [action.ctrlType]: state.vals[action.ctrlType] - 1};
    const updatedCtrlVals = updateObject(state.vals, updatedControlValue);
    const updatedState = {
        vals: updatedCtrlVals,
        minutes: updatedCtrlVals.workTime,
        seconds: 0,
        loading: false
    }

    return updateObject(state, updatedState);
};

// starting and pausing the timer
const startTimer = (state, action) => {
    return updateObject(state, {
        timerOn: true,
        timerId: action.timerId,
        timerEnded: false
    });
}

const timerDecrement = (state, action) => {
    if(state.seconds <= 0) {
        return updateObject(state, {
            minutes: state.minutes - 1,
            seconds: 59
        });
    } else {
        return updateObject(state, {
            seconds: state.seconds - 1
        });
    }    
};

const pauseTimer = (state, action) => {
    return updateObject(state, {timerOn: false});
};

const timeEnd = (state, action) => {
    return updateObject(state, {
        timerOn: false,
        timerEnded: true
    });
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_TIMER_START: return setTimerStart(state, action);
        case actionTypes.SET_TIMER_SUCCESSS: return setTimerSuccess(state, action);
        case actionTypes.SET_TIMER_FAIL: return setTimerFail(state, action);
        case actionTypes.ADD_TO_TIMER_CONTROL: return addToTimerControl(state, action);
        case actionTypes.SUBTRACT_FROM_TIMER_CONTROL: return removeFromTimerControl(state, action);
        case actionTypes.START_TIMER: return startTimer(state, action);
        case actionTypes.TIMER_DECREMENT: return timerDecrement(state, action);
        case actionTypes.PAUSE_TIMER: return pauseTimer(state, action);
        case actionTypes.TIME_END: return timeEnd(state, action);
        default: return state;
    }
};


export default reducer;