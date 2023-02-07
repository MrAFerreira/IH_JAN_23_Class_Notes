//Promise States

//Pending
//Resolves
//Rejected

const promise1 = new Promise((resolve, reject) => resolve('Good morning'));
//Whole promise
//console.log(promise1);

//the resolved value
//promise1.then((value) => console.log(value));

promise1
  .then((value) => {
    console.log(value);
    return 'A';
  })
  .then((bananas) => {
    //bananas is A
    console.log(bananas);
  })
  .catch((err) => {
    console.log(err);
  });

//A
//rejected

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Took to long');
  }, 1000);
});

async function greet() {
  try {
    let greeting = await promise2;
    console.log(greeting);
  } catch (error) {
    console.log(error);
  }
}

greet();
