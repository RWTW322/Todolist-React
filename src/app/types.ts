export interface TodoProps {
    description: string;
    title: string;
    isDone: boolean;
    id: number;
    onChangeTodo:(newTodo: TodoProps) => void;
}
