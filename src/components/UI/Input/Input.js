// packages
import React from 'react';

// css
import classes from './Input.module.scss';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.input_element];

    // if it's an invalid input, if it should be vaildated, and if data has been entered
    if(props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.invalid);
    }

    switch (props.elementType) {
        case('input'):
            inputElement = <input
                                className={inputClasses.join(' ')}
                                {...props.elementConfig}
                                value={props.value}
                                onChange={props.changed} />;
            break;
        case('textarea'):
            inputElement = <input
                                className={classes.input_element}
                                {...props.elementConfig}
                                value={props.value}
                                onChange={props.changed} />;
            break;
        case('select'):
            inputElement = (
                <select
                    className={classes.input_element}
                    value={props.value}
                    onChange={props.changed}>
                        {props.elementConfig.options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.displayValue}
                            </option>
                        ))}
                    </select>
            );
            break;
        default:
            inputElement = <input
                                className={inputClasses}
                                {...props.elementConfig}
                                value={props.value}
                                onChange={props.changed} />;
    }

    return (
        <div className={classes.input}>
            <label className={classes.label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;