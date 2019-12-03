import React from "react";
import renderer from "react-test-renderer";
import TodoListItem from "..";

describe("app", () => {
  it("matches default snapshot", () => {
    const props = {
      value: 1,
      onToggle: () => {},
      checked: false,
      labelId: "Hurro World"
    };

    const tree = renderer.create(<TodoListItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
