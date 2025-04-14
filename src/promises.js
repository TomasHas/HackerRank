// Create a new Promise
// const myPromise = new Promise((resolve, reject) => {
//   // Simulate an asynchronous operation using setTimeout
//   setTimeout(() => {
//     resolve("Promise resolved after 2 seconds");
//   }, 2000);
// });

// // Consume the promise using .then() method
// myPromise.then((message) => {
//   console.log(message);
// });

//& ////////////////////////////////

// Create the first promise
// const firstPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("First promise resolved");
//   }, 1000);
// }).then((message) => {
//   console.log(message); // Log the message from the first promise
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Second promise resolved");
//     }, 1000);
//   });
// });
// // Chain the second promise
// const secondPromise = firstPromise.then((message) => {
//   console.log(message); // Log the message from the first promise
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Second promise resolved");
//     }, 1000);
//   });
// });

// // Chain the third promise
// secondPromise
//   .then((message) => {
//     console.log(message); // Log the message from the second promise
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Third promise resolved");
//       }, 1000);
//     });
//   })
//   .then((message) => {
//     console.log(message);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("fourth promise resolved");
//       }, 1000);
//     });
//     // Log the message from the third promise
//   })
//   .then((message) => {
//     console.log(message); // Log the message from the third promise
//   });

//& ////////////////////////////////////////

// Create a promise that simulates an error
// const errorPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("An error occurred");
//   }, 1000);
// });

// // Handle the error using .catch() method
// errorPromise
//   .then((message) => {
//     console.log(message); // This won't be executed
//   })
//   .catch((error) => {
//     console.error("Error caught:", error); // Log the error message
//   });

// // Another way to handle errors using .then() second parameter
// errorPromise.then(
//   (message) => {
//     console.log(message); // This won't be executed
//   },
//   (error) => {
//     console.error("Error caught using then second parameter:", error); // Log the error message
//   }
// );

//& ///////////////////////////////////////

//PROMISE ALL -- The Promise.all method takes an array of promises and returns a single promise that resolves when all the promises in the array have resolved. If any of the promises are rejected, Promise.all immediately rejects with the reason of the first promise that rejected.

// Create three promises that resolve after different times
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("First promise resolved after 1 second");
//   }, 1000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Second promise resolved after 2 seconds");
//   }, 2000);
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Third promise resolved after 3 seconds");
//   }, 3000);
// });

// // Use Promise.all to run the promises in parallel
// Promise.all([promise1, promise2, promise3])
//   .then((messages) => {
//     console.log("All promises resolved:");
//     messages.forEach((message, index) => {
//       console.log(`Promise ${index + 1}: ${message}`);
//     });
//   })
//   .catch((error) => {
//     console.error("One of the promises rejected:", error);
//   });

//& ////////////////////////////////////////////

// RACE PROMISE -  Promise.race method takes an array of promises and returns a single promise that resolves or rejects as soon as the first promise in the array resolves or rejects.

// Create three promises that resolve after different times
// const fastPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Fast promise resolved");
//   }, 1000);
// });

// const mediumPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Medium promise resolved");
//   }, 2000);
// });

// const slowPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Slow promise resolved");
//   }, 3000);
// });

// // Use Promise.race to return the first resolved promise
// Promise.race([fastPromise, mediumPromise, slowPromise])
//   .then((message) => {
//     console.log("First resolved promise:", message);
//   })
//   .catch((error) => {
//     console.error("Promise rejected:", error);
//   });

//& ////////////////////////////////

// PROMISE ANY  --  The Promise.any method takes an array of promises and returns a single promise that resolves as soon as any of the promises in the array fulfill. If all the promises are rejected, it rejects with an AggregateError containing all the rejection reasons.

// Create three promises with different resolve and reject times
// const promiseA = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Promise A rejected");
//   }, 1000);
// });

// const promiseB = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise B resolved");
//   }, 4000);
// });

// const promiseC = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise C resolved");
//   }, 3000);
// });

// // Use Promise.any to get the first fulfilled promise
// Promise.any([promiseA, promiseB, promiseC])
//   .then((message) => {
//     console.log("First fulfilled promise:", message);
//   })
//   .catch((error) => {
//     console.error("All promises were rejected:", error);
//   });
