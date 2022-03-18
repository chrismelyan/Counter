import React from 'react';
import Button from "../Button";

type ButtonsType = {
    counter: number
    maxValue: number
    startValue: number
    setValue: (start: number) => void
}

const Buttons = ({startValue, setValue, maxValue}: ButtonsType) => {
    const onClickHandler = () => {
        setValue(startValue)
    }

    return (
        <div className={'buttons'}>
                <Button
                    callBack={onClickHandler}
                    title={'set'}
                    disabled={startValue === maxValue || startValue < 0}
                />

        </div>
    );
};

export default Buttons;