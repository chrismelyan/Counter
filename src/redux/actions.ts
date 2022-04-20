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

export const changeCounterValue = (startValue: number, editMode: boolean) => {
    return {
        type: 'CHANGE_COUNTER_VALUE',
        payload: {startValue, editMode}
    } as const
}

export const resetAC = () => {
    return {
        type: 'RESET'
    } as const
}

export const incrementAC = () => {
    return {
        type: 'INCREMENT'
    } as const
}
