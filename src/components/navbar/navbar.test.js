// import Navbar from "./Navbar";
import { render } from "@testing-library/react";
import React from "react";

// const { getPlatform } = require("");
// jest.mock("device");

describe("", () => {
  it("should render succesfully", () => {
    getPlatform.mockImplementation(() => "desktop");
    jest.isolateModules(() => {
      const { Navbar } = require("./Navbar");

      const { container } = render(<Navbar>test</Navbar>);

      expect(container).toMatchSnapshot();
    });
  });
});

// import React from "react";

// describe("Navbar", () => {
//   it("toggleColorMode", () => {
//     const expect = "toggleColorMode";
//     const result = Navbar("toggleColorMode");
//     expect(result).toBe(expected);
//   });
// });
