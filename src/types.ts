export interface ITask {
  id: number;
  title: string;
  completed: boolean;
}

export interface ITodoTaskProps {
  task: ITask;
}

export type TState = {
  todosSlice: ITodoSlice;
};
export interface ITodoSlice {
  todos: ITask[];
  isLoading: boolean;
}

export interface IFetchTodos {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}
