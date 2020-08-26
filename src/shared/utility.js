export const updateObject = (oldObject,  updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const cL = (param) => {
    console.log("This is the console.log helper function...");
    console.log(param);
};

export const calculateTimeFraction = (mins, seconds, minsOnStart) => {
    const secondsLeft = (mins * 60) + seconds;
    const secondsStart = minsOnStart * 60;
    const rawFraction = secondsLeft / secondsStart;
    return rawFraction - (1 / secondsStart) * (1 - rawFraction);
};