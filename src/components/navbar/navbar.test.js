import Navbar from "./Navbar";

describe("Navbar", () => {
  it("toggleColorMode", () => {
    const expect = "toggleColorMode";
    const result = Navbar("toggleColorMode");
    expect(result).toBe(expected);
  });
});
