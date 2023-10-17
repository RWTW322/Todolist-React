export interface TodoProps {
    description: string;
    title: string;
    isDone: boolean;
    id: number;
}

// export type TodoWithStringId = Omit<TodoProps, 'id'> & {id:string}