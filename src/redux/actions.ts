export const changeSettings = (maxValue: number, startValue: number, editMode: boolean) => {
    return {
        type: 'CHANGE_SETTINGS',
        payload: {maxValue, startValue, editMode}
    } as const
}

export const changeStartValue = (startValue: number, editMode: boolean) => {
    return {
        type: 'CHANGE_START_VALUE',
        payload: {startValue, editMode}
    } as const
}

export const changeMaxValue = (maxValue: number, editMode: boolean) => {
    return {
        type: 'CHANGE_MAX_VALUE',
        payload: {maxValue, editMode}
    } as const
}

export const changeStartAndMaxValues = (maxValue: number, startValue: number) => {
    return {
        type: 'CHANGE_START_AND_MAX_VALUES',
        payload: {maxValue, startValue}
    } as const
}

export const changeEditMode = (editMode: boolean) => {
    return {
        type: 'CHANGE_EDIT_MODE',
        payload: {editMode}
    } as const
}

export const setError = (error: string) => {
    return {
        type: 'SET_ERROR',
        payload: {error}
    } as const
}

export const changeCounterValue = (startValue: number, maxValue: number, editMode: boolean) => {
    return {
        type: 'CHANGE_COUNTER_VALUE',
        payload: {startValue, maxValue, editMode}
    } as const
}

export const reset = () => {
    return {
        type: 'RESET'
    } as const
}

export const increment = () => {
    return {
        type: 'INCREMENT'
    } as const
}
