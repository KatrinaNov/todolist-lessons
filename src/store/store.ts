import {combineReducers, createStore} from "redux";
import {TasksReducer} from "../reducers/TasksReducer";
import {FilterReducer} from "../reducers/FilterReducer";

let rootReducer = combineReducers({
  tasks: TasksReducer,
  filter: FilterReducer
})

export type RootReducerType = ReturnType<typeof rootReducer>

export let store = createStore(rootReducer)