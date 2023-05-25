export interface ITask {
     id: number,
     title: string,
     completed: boolean
}

export interface ITodoTaskProps{
     task: ITask
}

export type TState = {
     todos: ITask[];
}