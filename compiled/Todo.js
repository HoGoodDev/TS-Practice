"use strict";
const todos = [];
function addTodo(task) {
    const newTodo = {
        id: todos.length + 1,
        task: task,
        completed: false,
    };
    todos.push(newTodo);
}
