export interface ITodo {
     id: number,
     title: string,
     completed: boolean
}
export interface IList extends Array<ITodo> {}