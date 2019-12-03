import React from "react";
import renderer from "react-test-renderer";

import TodoList from "../";

describe("app", () => {
  it("matches default snapshot", () => {
    const tree = renderer.create(<TodoList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
