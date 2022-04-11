import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "./localStorage";

const rootReducers = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducers, loadState())

store.subscribe(() => {
    saveState({
        counter: {
            startValue: store.getState().counter.startValue,
            maxValue: store.getState().counter.maxValue,
            value: store.getState().counter.value
        }
    })
})

export type AppStateType = ReturnType<typeof rootReducers>