import React from "react";
import { shallow } from "enzyme";
import { Test } from "../Test";

describe("test node", () => {
  it("CheckboxWithLabel changes the text after click", () => {
    // Render a checkbox with label in the document
    const checkbox = shallow(<Test />);

    expect(checkbox.text()).toEqual("测试");
  });
});
