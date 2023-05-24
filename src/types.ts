export interface ITask {
     id: number,
     title: string,
     completed: boolean
}

export interface ITodoTaskProps{
     task: ITask
}

export type TodoType = {
     "userId": number,
     "id": number,
     "title": string,
     "completed": boolean
}

export type TInitialState = {
     todos: TodoType[]
}