interface Todo{
id: number;
task: string;
completed: boolean;

}

const todos: Todo[] = [];

function addTodo(task: string): void{

    const newTodo: Todo = {

        id: todos.length + 1,
        task: task,
        completed: false,
    };
    todos.push(newTodo)

}