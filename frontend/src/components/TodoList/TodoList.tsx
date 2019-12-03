import React, { useState, useEffect } from "react";
import { List } from "@material-ui/core";
import TodoListItem from "../TodoListItem";
import AddTodoForm from "../AddTodoForm";

import api from "../../api";

interface ITodoListItem {
  id: number;
  title: string;
  completed: boolean;
}
const TodoList = () => {
  const [todos, setTodos] = useState<ITodoListItem[]>([]);
  const [receivedInitialState, setReceivedInitialState] = useState(false);

  // Get Initial State Hook. Should be pulled out into another file
  useEffect(() => {
    if (!receivedInitialState) {
      api.getInitialState((data: any) => {
        setTodos(data);
        setReceivedInitialState(true);
      });
    }
  });

  // Handle New Data From Backend
  useEffect(() => {
    api.handleUpdatedState((data: any) => {
      setTodos(data);
    });
  });

  const addTodo = (todo: string) => {
    const newTodo = {
      title: todo,
      completed: false
    };
    setTodos([...todos, newTodo]);
    api.addTodo(newTodo);
  };

  const toggleTodo = (id: number) => {
    let toggledTodo;
    const nextState = todos.map(a => {
      if (a.id === id) {
        toggledTodo = { ...a, completed: !a.completed };
        return toggledTodo;
      } else {
        return a;
      }
    });
    setTodos(nextState);
    api.toggleTodo(toggledTodo);
  };

  return (
    <>
      <AddTodoForm onSubmit={todo => addTodo(todo)} />
      <List>
        {todos &&
          todos.map(todoItem => {
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
