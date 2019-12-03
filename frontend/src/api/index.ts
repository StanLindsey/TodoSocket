import openSocket from "socket.io-client";

const socket = openSocket("http://localhost:8080");

function getInitialState(cb: any) {
  socket.on("SEND_INITIAL_STATE", (data: any) => cb(data));
}

function addTodo(task: any) {
  socket.emit("ADD_TODO", task);
}

function toggleTodo(task: any) {
  socket.emit("TOGGLE_TODO", task);
}

function handleUpdatedState(cb: any) {
  socket.on("STATE_UPDATED", (data: any) => cb(data));
}

export default { getInitialState, addTodo, toggleTodo, handleUpdatedState };
