import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";

const RootReducers = combineReducers({
    counter: counterReducer
})
export type AppStateType = ReturnType<typeof RootReducers>

export const store = createStore(RootReducers)

type AppStoreType = typeof store