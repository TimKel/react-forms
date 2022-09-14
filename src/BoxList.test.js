import React from "react";
import { render, fireEvent, screen, wait } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(BoxList, height = "2", width = "2", color = "peachpuff") {
  const heightInput = screen.getByLabelText("Height:");
  const widthInput = BoxList.getByLabelText("Width:");
  const backgroundInput = BoxList.getByLabelText("Background Color:");
  fireEvent.change(backgroundInput, { target: { value: color } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });
  const button = BoxList.getByText("Submit");
  fireEvent.click(button);
}

it("renders without crashing", function() {
  render(<BoxList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", function() {
  const boxList = render(<BoxList />);

  // no boxes yet
  expect(boxList.queryByText("Remove Box")).not.toBeInTheDocument();

  addBox(boxList);

  // expect to see a box
  const removeButton = boxList.getByText("Remove Box");
  expect(removeButton).toBeInTheDocument();
  expect(removeButton.previousSibling).toHaveStyle(`
    width: 2em;
    height: 2em;
    background-color: peachpuff;
  `);
  // expect form to be empty
  expect(boxList.getAllByDisplayValue("")).toHaveLength(3);

  // expect(asFragment()).toMatchSnapshot();
});

it("can remove a box", function() {
  const boxList = render(<BoxList />);
  addBox(boxList);

  const removeButton = boxList.getByText("Remove Box");

  // click the remove button and the box should be gone
  fireEvent.click(removeButton);
  expect(removeButton).not.toBeInTheDocument();
});
