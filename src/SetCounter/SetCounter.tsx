import React, {useEffect} from 'react';
import SetCounterDisplay from "./SetCounterDisplay";
import SetButtons from "./SetButtons";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/store";
import {
    changeCounterValue,
    changeMaxValue,
    changeStartAndMaxValues,
    changeStartValue,
    setError
} from "../redux/actions";

const SetCounter = () => {
    const errorText = "Incorrect value!";

    const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)
    const error = useSelector<AppStateType, string>(state => state.counter.error)
    const editMode = useSelector<AppStateType, boolean>(state => state.counter.editMode)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(changeStartAndMaxValues(maxValue, startValue))
    }, [maxValue, startValue])

    const setNewValue = () => {
        if (editMode && !error) {
            dispatch(changeCounterValue(startValue, maxValue))
        }
    }
    const startValueCallback = (value: number) => {
        dispatch(changeStartValue(value, true))

        if (value < 0) return dispatch(setError(errorText));
        if (value >= maxValue) return dispatch(setError(errorText));
        if (maxValue >= 0) dispatch(setError(''));
    }
    const maxValueCallback = (value: number) => {
        dispatch(changeMaxValue(value, true))

        if (value < 0) return dispatch(setError(errorText));
        if (value <= startValue) return dispatch(setError(errorText));
        if (startValue >= 0) dispatch(setError(''));
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