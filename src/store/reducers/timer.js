import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    vals: [],
    minutes: 25,
    seconds: 0,
    working: false,
    breaking: false,
    cycle: 0,
    workTime: 25,
    breakTime: 5,
    totalCycles: 4,
    minsOnStart: 0,
    timerOn: false,
    timerId: null,
    loading: false,
    timerPaused: false,
    wasReset: false,
    timerEnded: false,
    roundEnded: false,
    roundTotal: 0
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
    let updatedState = {};

    if(action.ctrlType === "workTime") {
        updatedState = {
            vals: updatedCtrlVals,
            minutes: updatedCtrlVals.workTime,
            workTime: updatedCtrlVals.workTime
        }
    } else if(action.ctrlType === "cycles") {
        updatedState = {
            vals: updatedCtrlVals,
            totalCycles: updatedCtrlVals.cycles
        }
    } else if(action.ctrlType === "breakTime")  {
        updatedState =  {
            vals: updatedCtrlVals,
            breakTime: updatedCtrlVals.breakTime
        }
    } else {
        updatedState = {
            vals: updatedCtrlVals
        }
    }    
    
    return updateObject(state, updatedState);
};

const removeFromTimerControl = (state, action) => {
    const updatedControlValue = { [action.ctrlType]: state.vals[action.ctrlType] - 1};
    const updatedCtrlVals = updateObject(state.vals, updatedControlValue);
    let updatedState = {};

    if(action.ctrlType === "workTime") {
        updatedState = {
            vals: updatedCtrlVals,
            minutes: updatedCtrlVals.workTime,
            workTime: updatedCtrlVals.workTime
        }
    } else if(action.ctrlType === "cycles") {
        updatedState = {
            vals: updatedCtrlVals,
            totalCycles: updatedCtrlVals.cycles
        }
    } else if(action.ctrlType === "breakTime") {
        updatedState = {
            vals:  updatedCtrlVals,
            breakTime: updatedCtrlVals.breakTime
        }
    } else {
        updatedState = {
            vals: updatedCtrlVals
        }
    }

    return updateObject(state, updatedState);
};

// start/pause/reset the timer
const startTimer = (state, action) => {
    if(state.cycle === 0) {
        return updateObject(state, {
            working: true,
            cycle: state.cycle + 1,
            minsOnStart: state.minutes,
            timerOn: true,
            timerId: action.timerId,
            timerPaused: false,
            wasReset: false,
            timerEnded: false
        });
    } else {
        return updateObject(state, {
            minsOnStart: state.minutes,
            timerOn: true,
            timerId: action.timerId,
            timerPaused: false,
            wasReset: false,
            timerEnded: false
        });
    }    
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
    return updateObject(state, {
        timerOn: false,
        timerPaused: true
    });
};

const timeEnd = (state, action) => {
    return updateObject(state, {
        timerOn: false,
        timerPaused: false,
        timerEnded: true
    });   
}

const resetTimer = (state, action) => {
    const updatedState = {
        minutes: state.minsOnStart,
        seconds: 0,
        working: false,
        breaking: false,
        cycle: 0,
        timerOn: false,
        timerPaused: false,
        wasReset: true
    }

    return updateObject(state, updatedState);
}

// work
const workStart = (state, action) => {
    const updatedState = {
        working: true,
        breaking: false
    }

    return updateObject(state, updatedState);
}

const workEnd = (state, action) => {
    const updatedState = {
        working: false,
        timerId: null
    }

    return updateObject(state, updatedState);
}

const setWorkTime = (state, action) => {
    const updatedState = {
        minutes: state.workTime
    }

    return updateObject(state, updatedState);
}

// break
const breakStart = (state, action) => {
    const updatedState = {
        working: false,
        breaking: true
    }

    return updateObject(state, updatedState);
}

const breakEnd = (state, action) => {
    const updatedState = {
        breaking: false,
        timerId: null
    }

    return updateObject(state, updatedState);
}

const setBreakTime = (state, action) => {
    const updatedState = {
        minutes: state.breakTime
    }

    return updateObject(state, updatedState);
}

// cycles
const cycleStart = (state, action) => {
    return updateObject(state, state);
}

const cycleEnd = (state, action) => {
    return updateObject(state, state);
}

const nextCycle = (state, action) => {
    const updatedState = {
        cycle: state.cycle + 1
    }

    return updateObject(state, updatedState);
}

// rounds
const roundStart = (state, action) => {
    const updatedState = {
        roundEnded: false,
        roundTotal: state.roundTotal + 1
    }

    return updateObject(state, updatedState);
}

const roundEnd = (state, action) => {
    const updatedState = {
        minutes: state.minsOnStart,
        seconds: 0,
        working: false,
        breaking: false,
        cycle: 0,
        workTime: state.minsOnStart,
        breakTime: state.vals.breakTime,
        totalCycles: state.vals.cycles,
        timerOn: false,
        timerId: null,
        timerPaused: false,
        wasReset: false,
        timerEnded: true,
        roundEnded: true
    }

    return updateObject(state, updatedState);
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
        case actionTypes.RESET_TIMER: return resetTimer(state, action);
        case actionTypes.CYCLE_START: return cycleStart(state, action);
        case actionTypes.CYCLE_END: return cycleEnd(state, action);
        case actionTypes.NEXT_CYCLE: return nextCycle(state, action);
        case actionTypes.ROUND_START: return roundStart(state, action);
        case actionTypes.ROUND_END: return roundEnd(state, action);
        case actionTypes.WORK_START: return workStart(state, action);
        case actionTypes.WORK_END: return workEnd(state, action);
        case actionTypes.SET_WORK_TIME: return setWorkTime(state, action);
        case actionTypes.BREAK_START: return breakStart(state, action);
        case actionTypes.BREAK_END: return breakEnd(state, action);
        case actionTypes.SET_BREAK_TIME: return setBreakTime(state, action);
        default: return state;
    }
};


export default reducer;