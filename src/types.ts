export interface ITask {
     id: number,
     title: string,
     completed: boolean
}

export interface ITodoTaskProps{
     task: ITask
}

export type TState = {
     todosSlice: any;
     // todos: ITask[];
}

export type TInitState = {
     todos: ITask[]
}
