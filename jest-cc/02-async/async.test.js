const { default: expect } = require("expect");
const fetchData = require("./async");

it("return the correct todo - async await", async () => {
  const todo = await fetchData(1);
  expect(todo.id).toBe(1);
});

it("return the correct todo - promise", () => {
  fetchData(1).then((todo) => {
    expect(todo.id).toBe(1);
  });
});
