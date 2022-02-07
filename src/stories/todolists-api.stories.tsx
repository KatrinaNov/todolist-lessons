import React, {useEffect, useState} from 'react'
import {todolistApi} from "../api/todolist-api";

export default {
  title: 'API'
}
export const GetTodolists = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    todolistApi.getTodos()
      .then((res) => {
        setState(res.data);
      })

  }, [])


  return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const title = "MYTodolist"
    todolistApi.createTodo(title)
      .then((res) => {
        setState(res.data);
      })
  }, [])


  return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = '1b4ae02f-1e60-4c05-98af-10fe23c8923a';

    todolistApi.deleteTodo(todolistId).then((res) => {
      setState(res.data);
    })
  }, [])

  return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = '9d12b3d1-607b-4266-990a-98d89e3efb0d';
    const title = 'REDUX>>>>>>>>';
    todolistApi.updateTodoTitle(todolistId, title)
      .then((res) => {
        setState(res.data)
      })
  }, [])

  return <div> {JSON.stringify(state)}</div>
}

export const GetTasks = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = '9d12b3d1-607b-4266-990a-98d89e3efb0d';
    todolistApi.getTasks(todolistId)
      .then((res) => {
        setState(res.data);
      })

  }, [])

  return <div> {JSON.stringify(state)}</div>
}


export const CreateTask = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = '9d12b3d1-607b-4266-990a-98d89e3efb0d';
    const title = "NEWTASK"
    todolistApi.createTask(todolistId, title)
      .then((res) => {
        setState(res.data);
      })
  }, [])


  return <div> {JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = '9d12b3d1-607b-4266-990a-98d89e3efb0d';
    const taskId = "0772f018-e717-4929-b4e4-a1a7689fcbd8"
    todolistApi.deleteTask(todolistId, taskId)
      .then((res) => {
        setState(res.data);
      })
  }, [])


  return <div> {JSON.stringify(state)}</div>
}

export const UpdateTaskTitle = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = '9d12b3d1-607b-4266-990a-98d89e3efb0d';
    const taskId = "3c826b44-7c0a-4a4e-9fcc-f90320448936"
    const title = 'MYTask 2!!!!!!!!!!';
    todolistApi.updateTaskTitle(todolistId, taskId, title)
      .then((res) => {
        setState(res.data)
      })
  }, [])

  return <div> {JSON.stringify(state)}</div>
}
