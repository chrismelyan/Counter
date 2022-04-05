import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {counterValuesReducer} from "./counter-values-reducer";

const RootReducers = combineReducers({
    count: counterReducer,
    counterValues: counterValuesReducer
})
type AppStateType = ReturnType<typeof RootReducers>

export const store = createStore(RootReducers)

type AppStoreType = typeof store