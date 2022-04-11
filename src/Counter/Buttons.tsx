import React from 'react';
import Button from "./Button";

type ButtonsType = {
    startValue: number
    maxValue: number
    editMode: boolean
    value: number
    increment: () => void
    reset: () => void
}

const Buttons = ({maxValue, startValue, editMode, value, reset, increment}: ButtonsType) => {

    return (
        <div className={'buttons'}>
                <Button
                    callBack={increment}
                    title={'inc'}
                    disabled={editMode || value === maxValue}
                />
                <Button
                    callBack={reset}
                    title={'reset'}
                    disabled={editMode || value === startValue}
                />
        </div>
    );
};

export default Buttons;