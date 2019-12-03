import React, { useState } from "react";
import { List } from "@material-ui/core";
import TodoListItem from "../TodoListItem";
import AddTodoForm from "../AddTodoForm";

interface ITodoListItem {
  id: number;
  title: string;
  completed: boolean;
}
const TodoList = () => {
  const [todos, setTodos] = useState<ITodoListItem[]>([]);

  const addTodo = (todo: string) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: todo,
        completed: false
      }
    ]);
  };

  const toggleTodo = (id: number) => {
    const nextState = todos.map(a =>
      a.id === id ? { ...a, completed: !a.completed } : a
    );
    setTodos(nextState);
  };

  return (
    <>
      <AddTodoForm onSubmit={todo => addTodo(todo)} />
      <List>
        {todos.map(todoItem => {
          const labelId = `checkbox-list-label-${todoItem.id}`;

          return (
            <TodoListItem
              key={todoItem.id}
              id={todoItem.id}
              title={todoItem.title}
              onToggle={(id: number) => toggleTodo(id)}
              checked={todoItem.completed}
              labelId={labelId}
            />
          );
        })}
      </List>
    </>
  );
};

export default TodoList;
