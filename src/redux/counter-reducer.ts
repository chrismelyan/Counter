import {
    changeCounterValue,
    changeEditMode,
    changeMaxValue,
    changeStartValue,
    incrementAC, resetAC, setError
} from "./actions";
import {AppStateType} from "./store";

export type CounterType = {
    startValue: number
    maxValue: number
    value: number
    error: string
    editMode: boolean
}

const initialState = {
    startValue: 0,
    maxValue: 0,
    value: 0,
    error: '',
    editMode: true
}

type ActionType = ReturnType<typeof changeStartValue>
    | ReturnType<typeof changeMaxValue>
    | ReturnType<typeof changeEditMode>
    | ReturnType<typeof incrementAC>
    | ReturnType<typeof resetAC>
    | ReturnType<typeof setError>
    | ReturnType<typeof changeCounterValue>


export const counterReducer = (state: CounterType = initialState, action: ActionType): CounterType => {
    switch (action.type) {
        case 'CHANGE_START_VALUE':
        case 'CHANGE_MAX_VALUE':
        case 'CHANGE_EDIT_MODE':
        case 'SET_ERROR':
            return {
                ...state,
                ...action.payload
            }
        case 'RESET':
            return {
                ...state, value: state.startValue
            }
        case 'INCREMENT':
            return {
                ...state, value: state.value + 1
            }
        case 'CHANGE_COUNTER_VALUE':
            return {
                ...state,
                ...action.payload,
                value: action.payload.startValue
            }
    }
    return state
}

export const selectAllCounter = (state: AppStateType) => state.counter;





