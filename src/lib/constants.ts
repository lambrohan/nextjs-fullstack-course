export type Todo = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}


export const fakeTodos: Array<Todo> = [
    {
        id: 1,
        title: 'Todo 1',
        description: 'Description 1',
        completed: false,
    },
    {
        id: 2,
        title: 'Todo 2',
        description: 'Description 2',
        completed: false,
    },
    {
        id: 3,
        title: 'Todo 3',
        description: 'Description 3',
        completed: true,
    },
    {
        id: 4,
        title: 'Todo 4',
        description: 'Description 4',
        completed: false,
    },

]