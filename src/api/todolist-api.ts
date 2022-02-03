import axios, {AxiosResponse} from "axios";

// const settings = {
//   withCredentials: true,
//   headers: {
//     'API-KEY': '860b2199-293d-4424-9b31-caa190db03c4'
//   }
// }

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1/',
  headers: {
    'API-KEY': '860b2199-293d-4424-9b31-caa190db03c4'
  },
  withCredentials: true,
})

type Created = BaseResponseType<{ item: TodoType }>;

export const todolistApi = {
  getTodos() {
    return instance.get<Array<TodoType>>('todo-lists')
  },

  createTodo(title :string) {
    return instance.post<Created, AxiosResponse<Created>, {title: string}>('todo-lists', {title})
  },

  deleteTodo(todolistId: string) {
    return instance.delete<BaseResponseType>(`todo-lists/${todolistId}`)
  },
  updateTodoTitle(todolistId :string, title :string) {
    return instance.put<BaseResponseType, AxiosResponse<BaseResponseType>, {title: string}>(`todo-lists/${todolistId}`, {title})
  }
}

type TodoType = {
  addedDate: string
  id: string
  title: string
  order: number
}
type BaseResponseType<T = {}> = {
  fieldsErrors: string[]
  messages: string[]
  resultCode: number
  data: T
}