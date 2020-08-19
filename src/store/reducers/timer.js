import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    vals: [],
    loading: false
};

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

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_TIMER_START: return setTimerStart(state, action);
        case actionTypes.SET_TIMER_SUCCESSS: return setTimerSuccess(state, action);
        case actionTypes.SET_TIMER_FAIL: return setTimerFail(state, action);
        default: return state;
    }
};

export default reducer;