const axios = require("axios");

const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};

const fetchData = async (id) => {
  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  return results.data;
};

it("mock callback", () => {
  const mockCallback = jest.fn((x) => x + 3);
  forEach([1, 2], mockCallback);
  console.log(mockCallback.mock);
  expect(mockCallback.mock.calls.length).toBe(2);
  expect(mockCallback.mock.calls[0][0]).toBe(1);
  expect(mockCallback.mock.calls[1][0]).toBe(2);
  expect(mockCallback.mock.results[0].value).toBe(4);
  expect(mockCallback.mock.results[1].value).toBe(5);
});

it("mock return", () => {
  const mock = jest.fn();
  mock
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(1)
    .mockReturnValueOnce("hello");
  const result1 = mock();
  const result2 = mock();
  const result3 = mock();
  expect(result1).toBe(true);
  expect(result2).toBe(1);
  expect(result3).toBe("hello");
});

it("mock spy axios", async () => {
  jest.spyOn(axios, "get").mockReturnValueOnce({
    data: {
      id: 1,
      todo: "Change sheets.",
    },
  });
  // This doesn't actually call the http req
  const results = await fetchData(1);
  expect(results.id).toBe(1);
});
