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
  const [todos, setTodos] = useState<ITodoListItem[] | []>([]);

  const addTodo = (todo: string) => {
    setTodos([
      ...todos,
      {
        id: todos.length,
        title: todo,
        completed: false
      }
    ]);
  };

  const todosArray = todos as ITodoListItem[];

  return (
    <>
      <AddTodoForm onSubmit={todo => addTodo(todo)} />
      <List>
        {todosArray.map(todoItem => {
          const labelId = `checkbox-list-label-${todoItem.id}`;

          return (
            <TodoListItem
              key={todoItem.id}
              value={todoItem.title}
              onToggle={() => {}}
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
