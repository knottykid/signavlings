// import Navbar from "./Navbar";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

// const { getPlatform } = require("");
// jest.mock("device");

describe("", () => {
  it("should render succesfully", () => {
    render(
      <ChakraProvider>
        <Navbar/>
      </ChakraProvider>
    
    )
    // getPlatform.mockImplementation(() => "desktop");
    // jest.isolateModules(() => {
    //   const { Navbar } = require("./Navbar");

    //   const { container } = render(<Navbar>test</Navbar>);

    //   expect(container).toMatchSnapshot();
    // });
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
