import React from 'react';
import '../App.css';

type CounterDisplayType = {
    maxValue: number
    error: string
    editMode: boolean
    value: number
}

const CounterDisplay = ({maxValue, error, editMode, value}: CounterDisplayType) => {
    const setText = "enter value and press 'set'";

    const counterMessage = error
        ? <span className={'errorText'}>{error}</span>
        : <span className={'setText'}>{setText}</span>;

    const counterDisplay = `display counter ${value === maxValue ? 'red' : ''}`
    return (
        <div className={'display'}>
            {editMode
                ? counterMessage
                : <span className={counterDisplay}>{value}</span>}
        </div>
    );
};

export default CounterDisplay;