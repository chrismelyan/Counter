import React from 'react';
import Button from "./Button";
import {useDispatch} from "react-redux";

type ButtonsType = {
    startValue: number
    maxValue: number
    editMode: boolean
    counterValue: number

}

const Buttons = ({maxValue, startValue, editMode, counterValue}: ButtonsType) => {
    const dispatch = useDispatch()

    const increment = () => {
        counterValue < maxValue
        && dispatch(increment)
    }
    const reset = () => {
        dispatch(reset)
    }

    return (
        <div className={'buttons'}>
                <Button
                    callBack={increment}
                    title={'inc'}
                    disabled={editMode || counterValue === maxValue}
                />
                <Button
                    callBack={reset}
                    title={'reset'}
                    disabled={editMode || counterValue === startValue}
                />
        </div>
    );
};

export default Buttons;