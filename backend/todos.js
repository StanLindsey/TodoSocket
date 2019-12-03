const fs = require("fs");

const getInitialState = () => JSON.parse(fs.readFileSync("data.json"));
const addTodo = (state, newTodo) => [
  ...state,
  { ...newTodo, id: state.length + 1 }
];
const toggleTodo = (state, toggledTodo) =>
  state.map(a => (a.id === toggledTodo.id ? toggledTodo : a));

module.exports = { getInitialState, addTodo, toggleTodo };
