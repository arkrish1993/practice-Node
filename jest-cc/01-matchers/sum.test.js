const { describe } = require("yargs");
const sum = require("./sum");
const { default: expect } = require("expect");

describe("Example tests", () => {
  it("add 1 + 2 should be equal 3", async () => {
    const result = await sum(1, 2);
    expect(result).toBe(3);
  });
  it("add 1 + 2 should be equal 3", () => {
    const promise = sum(1, 2);
    promise.then((result) => {
      expect(result).toBe(3);
    });
  });
  it("object assignment", () => {
    const obj = {};
    expect(obj).toEqual({});
  });
  it("adding floats", () => {
    expect(0.1 + 0.3).toBeCloseTo(0.3999999);
  });
  it("no I in team", () => {
    expect("team").not.toMatch(/I/);
  });
});

function throwError() {
  throw new Error("error!");
}

describe("exceptions", () => {
  it("throwError function", () => {
    expect(() => throwError()).toThrowError();
    expect(() => throwError()).toThrow("error!");
  });
});
