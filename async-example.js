(function asyncExample() {
  setTimeout(() => {
    console.log("timeout");
  }, 2000);
  let counter = 0;
  const timer = setInterval(() => {
    console.log("interval", counter++);
    if (counter === 3) clearTimeout(timer);
  }, 1000);
})();
