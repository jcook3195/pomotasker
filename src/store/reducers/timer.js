import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    vals: [],
    loading: false
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
        loading: false
    }

    return updateObject(state, updatedState);
};

const removeFromTimerControl = (state, action) => {
    const updatedControlValue = { [action.ctrlType]: state.vals[action.ctrlType] - 1};
    const updatedCtrlVals = updateObject(state.vals, updatedControlValue);
    const updatedState = {
        vals: updatedCtrlVals,
        loading: false
    }

    return updateObject(state, updatedState);
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_TIMER_START: return setTimerStart(state, action);
        case actionTypes.SET_TIMER_SUCCESSS: return setTimerSuccess(state, action);
        case actionTypes.SET_TIMER_FAIL: return setTimerFail(state, action);
        case actionTypes.ADD_TO_TIMER_CONTROL: return addToTimerControl(state, action);
        case actionTypes.SUBTRACT_FROM_TIMER_CONTROL: return removeFromTimerControl(state, action);
        default: return state;
    }
};

export default reducer;