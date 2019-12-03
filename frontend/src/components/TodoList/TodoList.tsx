import React from "react";
import { List } from "@material-ui/core";
import TodoListItem from "../TodoListItem";
import AddTodoForm from "../AddTodoForm";

const TodoList = () => {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <>
      <AddTodoForm />
      <List>
        {[0, 1, 2, 3].map(value => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <TodoListItem
              key={value}
              value={value}
              onToggle={() => handleToggle(value)}
              checked={checked.indexOf(value) !== -1}
              labelId={labelId}
            />
          );
        })}
      </List>
    </>
  );
};

export default TodoList;
