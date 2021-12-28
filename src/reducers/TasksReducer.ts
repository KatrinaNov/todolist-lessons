import React from 'react';
import {TaskType} from "../Todolist";
import {v1} from "uuid";

type ActionType = removeTaskACType | addTaskACType

let initialState: Array<TaskType> = [
  { id: v1(), title: "HTML&CSS", isDone: true },
  { id: v1(), title: "JS", isDone: true },
  { id: v1(), title: "ReactJS", isDone: false },
  { id: v1(), title: "Rest API", isDone: false },
  { id: v1(), title: "GraphQL", isDone: false },
]

export const TasksReducer = (state: Array<TaskType> = initialState, action: ActionType) => {
  switch (action.type) {
    case 'REMOVE-TASK': {
      let newState = [...state]
      return newState.filter(t => t.id != action.id);
    }
    case 'ADD-TASK': {
      let task = { id: v1(), title: action.payload.title, isDone: false };
      let newTasks = [task, ...state];
      return newTasks
    }
    default: return state
  }
};

type removeTaskACType = ReturnType<typeof removeTaskAC>
// action creator
export const removeTaskAC = (id: string) => {
  return {
    type: 'REMOVE-TASK',
    id: id
  } as const
}
type addTaskACType = ReturnType<typeof addTaskAC>
// action creator
export const addTaskAC = (title: string) => {
  return {
    type: 'ADD-TASK',
    payload: {
      title: title
    }
  } as const
}
