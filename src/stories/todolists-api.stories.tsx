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

