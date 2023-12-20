const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello world");
  }, 2000);
});

promise
  .then(
    (data) => {
      console.log(data, "resolved");
    },
    (data) => {
      console.log(data, "rejected");
    }
  )
  .then((data) => {
    console.log("2");
  })
  .finally(() => {
    console.log("done");
  });
