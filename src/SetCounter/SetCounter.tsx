import React, {useEffect, useState} from 'react';
import SetCounterDisplay from "./SetCounterDisplay";
import SetButtons from "./SetButtons";
import {CounterValuesObjType} from "../App";

type SetCounterType = {
    settingsChanged: (newValues: CounterValuesObjType) => void
    editMode: boolean
    setEditMode: (isEdited: boolean) => void
    error: string
    setError: (message: string) => void
    counterValues: CounterValuesObjType
}

const SetCounter: React.FC<SetCounterType> = (
    {settingsChanged, editMode, setEditMode, setError, error, counterValues}
) => {
    const errorText = "Incorrect value!";

    let [startValue, setStartValue] = useState<number>(counterValues.startValue);
    let [maxValue, setMaxValue] = useState<number>(counterValues.maxValue);

    useEffect(() => {
        setStartValue(counterValues.startValue);
        setMaxValue(counterValues.maxValue);
    }, [counterValues])

    const setNewValue = () => {
        if (editMode && !error) {
            const newValues = {startValue, maxValue};
            settingsChanged(newValues);
        }
    }
    const startValueCallback = (value: number) => {
        setStartValue(value);
        setEditMode(true);

        if (value < 0) return setError(errorText);
        if (value >= maxValue) return setError(errorText);
        if (maxValue >= 0) setError('');
    }
    const maxValueCallback = (value: number) => {
        setMaxValue(value)
        setEditMode(true);

        if (value < 0) return setError(errorText);
        if (value <= startValue) return setError(errorText);
        if (startValue >= 0) setError('');
    }

    return (
        <div className={'counter-wrapper'}>
            <SetCounterDisplay
                setMaxValue={maxValueCallback}
                setStartValue={startValueCallback}
                maxValue={maxValue}
                startValue={startValue}
                error={error}
            />
            <SetButtons
                editMode={editMode}
                error={error}
                setNewValue={setNewValue}
            />
        </div>
    );
};

export default SetCounter;