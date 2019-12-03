const todos = require("../todos");

describe("Sockets Responses", () => {
  it("should create a todo", () => {
    const initialState = [];
    const newTodo = {
      id: 1,
      title: "Mah lovleh todoz",
      completed: false
    };

    expect(todos.addTodo(initialState, newTodo)).toEqual([
      {
        id: 1,
        title: "Mah lovleh todoz",
        completed: false
      }
    ]);
  });

  it("it should toggle a todo", () => {
    const initialState = [
      {
        id: 1,
        title: "Mah lovleh todoz",
        completed: false
      },
      {
        id: 2,
        title: "Mah lovleh todoz",
        completed: false
      }
    ];
    const toggledTodo = {
      id: 1,
      title: "Mah lovleh todoz",
      completed: true
    };

    expect(todos.toggleTodo(initialState, toggledTodo)).toEqual([
      {
        id: 1,
        title: "Mah lovleh todoz",
        completed: true
      },
      {
        id: 2,
        title: "Mah lovleh todoz",
        completed: false
      }
    ]);
  });
});
