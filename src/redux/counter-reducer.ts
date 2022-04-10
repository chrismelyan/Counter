import {
    changeCounterValue,
    changeEditMode,
    changeMaxValue,
    changeSettings, changeStartAndMaxValues,
    changeStartValue,
    increment, reset, setError
} from "./actions";

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
            return {
                ...state,
                editMode: action.payload.editMode,
                startValue: action.payload.startValue,
                maxValue: action.payload.maxValue
            }
        case 'CHANGE_COUNTER_VALUE':
            return {
                ...state,
                startValue: action.payload.startValue,
                maxValue: action.payload.maxValue,
                counterValue: action.payload.startValue,
                editMode: false
            }
        case 'CHANGE_START_VALUE':
            return {
                ...state,
                editMode: action.payload.editMode,
                startValue: action.payload.startValue
            }
        case 'CHANGE_MAX_VALUE':
            return {
                ...state,
                editMode: action.payload.editMode,
                maxValue: action.payload.maxValue
            }
        case 'CHANGE_START_AND_MAX_VALUES':
            return {
                ...state,
                startValue: action.payload.startValue,
                maxValue: action.payload.maxValue
            }
        case 'CHANGE_EDIT_MODE':
            return {
                ...state,
                editMode: action.payload.editMode
            }
        case 'INCREMENT':
            return {
                ...state,
                counterValue: state.counterValue + 1
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload.error
            }
        case 'RESET':
            return {...state, startValue: state.startValue}
    }
    return state
}





