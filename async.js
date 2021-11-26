//promises
const p1 = new Promise((res, rej) => {
  //async work
  setTimeout(() => {
    res(1);
    // rej(new Error("error1 is wrong"));
  }, 2000);
})
p1.then(result => console.log('result', result)).catch(err => console.log(err))

const p2 = new Promise((res, rej) => {
  setTimeout(() => {
  res(2);
  }, 2000);
}).then(result => console.log('result2', result))
Promise.all([p1, p2]).then(console.log('finished')).catch('some thing is wrong')

//asyn+await
