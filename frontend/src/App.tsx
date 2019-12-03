import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import TodoList from "./components/TodoList";
import "./App.css";
import { Container, Paper, Typography, Box } from "@material-ui/core";

const tempStyles = {
  palette: {
    background: {
      paper: "red"
    }
  }
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    }
  })
);

function App() {
  const classes = useStyles(tempStyles);

  return (
    <Container maxWidth="md">
      <Box m={4} display="flex" justifyContent="center">
        <Paper className={classes.root}>
          <Typography variant="h5" component="h1" align="center">
            On the Todo
          </Typography>
          <Typography component="p" align="center">
            A Todolist for super busy people
          </Typography>
          <TodoList />
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
