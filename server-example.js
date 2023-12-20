// function job() {
//   return new Promise(function (resolve, reject) {
//     reject();
//   });
// }

// let promise = job();

// promise

//   .then(
//     function () {
//       console.log("Success 1");
//     },
//     function () {
//       console.log("error");
//     }
//   )

//   .then(function () {
//     console.log("Success 2");
//   })

//   .then(function () {
//     console.log("Success 3");
//   })

//   .catch(function () {
//     console.log("Error 1");
//   })

//   .then(function () {
//     console.log("Success 4");
//   });

var x = 10;
function foo() {
  console.log(x);
  var x = 20;
}
foo();
