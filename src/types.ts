export interface ITask {
     id: number,
     title: string,
     completed: boolean
}

export interface ITodoTaskProps{
     task: ITask
}

export type TState = {
     todosSlice: ITodoSlice;
}
export interface ITodoSlice {
     todos: ITask[],
     isLoading: boolean
}
