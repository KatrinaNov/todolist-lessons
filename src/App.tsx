import React, {useReducer, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import { v1 } from 'uuid';
import {addTaskAC, removeTaskAC, TasksReducer} from "./reducers/TasksReducer";
import {changeFilterAC, FilterReducer} from "./reducers/FilterReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootReducerType} from "./store/store";

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    // let [tasks, tasksDispatch] = useReducer(TasksReducer,[
    //     { id: v1(), title: "HTML&CSS", isDone: true },
    //     { id: v1(), title: "JS", isDone: true },
    //     { id: v1(), title: "ReactJS", isDone: false },
    //     { id: v1(), title: "Rest API", isDone: false },
    //     { id: v1(), title: "GraphQL", isDone: false },
    // ]);
    let dispatch = useDispatch();
    // let tasks = useSelector<RootReducerType, Array<TaskType>>(state => state.tasks)
    // let filter = useSelector<RootReducerType, FilterValuesType>(state => state.filter)
    function removeTask(id: string) {
        // let filteredTasks = tasks.filter(t => t.id != id);
        // setTasks(filteredTasks);
        // tasksDispatch(removeTaskAC(id))
        dispatch(removeTaskAC(id))
    }
    function addTask(title: string) {
        // let task = { id: v1(), title: title, isDone: false };
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
        // tasksDispatch(addTaskAC(title))
        dispatch(addTaskAC(title))
    }

    // let [filter, filterDispatch] = useReducer(FilterReducer, "all");

    // let tasksForTodolist = tasks;
    //
    // if (filter === "active") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === false);
    // }
    // if (filter === "completed") {
    //     tasksForTodolist = tasks.filter(t => t.isDone === true);
    // // }
    // function changeFilter(value: FilterValuesType) {
    //     // filterDispatch(changeFilterAC(value));
    //     dispatch(changeFilterAC(value));
    // }

    return (
        <div className="App">
            <Todolist title="What to learn"
                      // tasks={tasksForTodolist}
                      removeTask={removeTask}
                      // changeFilter={changeFilter}
                      addTask={addTask} />
        </div>
    );
}

export default App;
