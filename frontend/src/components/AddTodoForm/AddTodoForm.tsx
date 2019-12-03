import React, { useState } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  Paper,
  IconButton,
  InputBase
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center"
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    },
    divider: {
      height: 28,
      margin: 4
    }
  })
);

const AddTodoForm = ({ onSubmit }: { onSubmit: (todo: string) => void }) => {
  const classes = useStyles();
  const [text, setText] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(text);
    setText("");
  };

  return (
    <Paper
      component="form"
      className={classes.root}
      onSubmit={e => handleSubmit(e)}
    >
      <InputBase
        className={classes.input}
        placeholder="Add new Task"
        inputProps={{ "aria-label": "Add new task" }}
        onChange={e => setText(e.target.value)}
        value={text}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="submit new task"
      >
        <AddIcon />
      </IconButton>
    </Paper>
  );
};

export default AddTodoForm;
