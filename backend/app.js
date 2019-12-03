var app = require("express")();
var server = require("http").Server(app);
var io = require("socket.io")(server);
var fs = require("fs");

var todos = require("./todos");

server.listen(8080);

// We use sync here because on startup we don't want to accept connections before we are ready to serve.
let state = todos.getInitialState();

io.on("connection", function(socket) {
  // Serve initial state on load
  socket.emit("SEND_INITIAL_STATE", state);

  // Push new TODOs to all clients
  socket.on("ADD_TODO", function(newTodo) {
    state = todos.addTodo(state, newTodo);
    socket.broadcast.emit("STATE_UPDATED", state);

    fs.writeFile("data.json", JSON.stringify(state), err => {
      if (err) throw err;
    });
  });
  // PUSH TOGGLED TODOS TO ALL CLIENTS
  socket.on("TOGGLE_TODO", function(toggledTodo) {
    const nextState = todos.toggleTodo(state, toggledTodo);

    state = nextState;
    socket.broadcast.emit("STATE_UPDATED", state);
    fs.writeFile("data.json", JSON.stringify(state), err => {
      if (err) throw err;
    });
  });
});

console.log("Sockets Listening on 8080");
