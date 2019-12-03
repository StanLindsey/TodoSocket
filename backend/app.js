var app = require("express")();
const fs = require("fs");
var server = require("http").Server(app);
var io = require("socket.io")(server);

server.listen(8080);

// We use sync here because its on startup and we don't want to accept connections before we are ready to serve.
let state = JSON.parse(fs.readFileSync("data.json"));

io.on("connection", function(socket) {
  // Serve initial state on load
  socket.emit("SEND_INITIAL_STATE", state);
  // Push new TODOs to all clients
  socket.on("ADD_TODO", function(newTodo) {
    state = [...state, newTodo];
    socket.broadcast.emit("STATE_UPDATED", state);

    fs.writeFile("data.json", JSON.stringify(state), err => {
      if (err) throw err;
    });
  });
  // PUSH TOGGLED TODOS TO ALL CLIENTS
  socket.on("TOGGLE_TODO", function(toggledTodo) {
    const nextState = state.map(a =>
      a.id === toggledTodo.id ? toggledTodo : a
    );

    state = nextState;
    socket.broadcast.emit("STATE_UPDATED", state);
    fs.writeFile("data.json", JSON.stringify(state), err => {
      if (err) throw err;
    });
  });
});

console.log("Sockets Listening on 8080");
