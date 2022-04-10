import {
    changeCounterValue,
    changeEditMode,
    changeMaxValue,
    changeSettings, changeStartAndMaxValues,
    changeStartValue,
    increment, reset, setError
} from "./actions";
import {AppStateType} from "./store";

export type CounterType = {
    startValue: number
    maxValue: number
    counterValue: number
    error: string
    editMode: boolean
}

const initialState = {
    startValue: 0,
    maxValue: 0,
    counterValue: 0,
    error: '',
    editMode: true
}

type ActionType = ReturnType<typeof changeSettings>
    | ReturnType<typeof changeStartValue>
    | ReturnType<typeof changeMaxValue>
    | ReturnType<typeof changeStartAndMaxValues>
    | ReturnType<typeof changeEditMode>
    | ReturnType<typeof increment>
    | ReturnType<typeof reset>
    | ReturnType<typeof setError>
    | ReturnType<typeof changeCounterValue>


export const counterReducer = (state: CounterType = initialState, action: ActionType): CounterType => {
    switch (action.type) {
        case 'CHANGE_SETTINGS':
        case 'CHANGE_COUNTER_VALUE':
        case 'CHANGE_START_VALUE':
        case 'CHANGE_MAX_VALUE':
        case 'CHANGE_START_AND_MAX_VALUES':
        case 'CHANGE_EDIT_MODE':
        case 'SET_ERROR':
            return {
                ...state,
                ...action.payload
            }
        case 'INCREMENT':
            return {
                ...state,
                counterValue: state.counterValue + 1
            }
        case 'RESET':
            return {...state, counterValue: state.startValue}
    }
    return state
}

export const selectAllCounter = (state: AppStateType) => state.counter;





