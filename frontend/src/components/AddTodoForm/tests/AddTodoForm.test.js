import React from "react";
import renderer from "react-test-renderer";
import AddTodoForm from "..";

describe("app", () => {
  it("matches default snapshot", () => {
    const tree = renderer.create(<AddTodoForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
