import React from 'react';
import {TaskType} from "../Todolist";
import {v1} from "uuid";
import {FilterValuesType} from "../App";

// type ActionType = changeFilterACType

let initialState: FilterValuesType = 'all'

export const FilterReducer = (state: FilterValuesType = initialState, action: changeFilterACType) => {
  switch (action.type) {
    case 'CHANGE-FILTER': {
      return action.payload.value
    }
    default: return state
  }
};

type changeFilterACType = ReturnType<typeof changeFilterAC>
// action creator
export const changeFilterAC = (value: FilterValuesType) => {
  return {
    type: 'CHANGE-FILTER',
    payload: {
      value: value
    }
  } as const
}

