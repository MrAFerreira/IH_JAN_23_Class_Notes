// Promises

// Promises are non-blocking code that will return something in the future

//Syntax

/* const myPromise = new Promise((resolve, reject) => {
  if (condition === true) {
    resolve(value);
  } else {
    reject(errorMessage);
  }
}); */

// Promise states
// Resolved - all ok
// Rejected - something went wrong
// Pending - waiting for it to finish

const names = ['Mariana', 'João', 'Marisha', 'Farid'];
//previously we could create functions and pass them as callbacks to control the flow of time within javascript
function consoleName(name) {
  console.log(name);
}

function getNames(count) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //If the index doesn't exist we reject the promise
      if (!names[count]) reject('Name not found');
      //otherwise we resolve with the correct value
      else resolve(names[count]);
    }, 1000);
  });
}

const name2 = getNames(2); //trigger the promise / setTimeout

//console.log(name2) --- this is pending

//.then
/* getNames(6)
  .then((name) => {
    //the .then is only triggered if the promise is resolved
    console.log(name);
  })
  .catch((error) => {
    //the .catch is only triggered when the promise is rejected
    console.log(error);
  }); */

//Chaining promises inside the then
/* getNames(0)
  .then((name) => {
    console.log(name);
    getNames(1).then((name) => {
      console.log(name);
      getNames(2).then((name) => {
        console.log(name);
      });
    });
  })
  .catch((err) => console.log(err)); */

//Chaining .then
/* getNames(0)
  .then(() => getNames(1))
  .then(() => getNames(2))
  .then(() => getNames(3))
  .catch((err) => console.log(err)); */

/*
getNames(0)
  .then((name) => {
    return `${name} is in the first seat`;
  })
  .then((value) => {
    console.log(value);
    return 2 + 2;
  })
  .then((value) => {
    //console.log(name);
    console.log(value);
  })
  .catch((err) => console.log(err))
  .finally(() => {
    console.log('Made it to the end');
  });
  */

/*
const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Error here'), 1000);
});
const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Caroline'), 4000);
});
const pr3 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Second error'), 5000);
});
const pr4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('André'), 3000);
});
*/
/* 
Promise.all([pr1, pr2, pr3, pr4])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => console.log(err));
 */
//Syntatic sugar - things that are easier for us developers to read

// async / await

//async function multipleNames(){}

//to declare a function as asynchronous we write the async keyword before the parenthesis
const multipleNames = async () => {
  //Inside the function we should have a try/catch block
  try {
    let firstName = await getNames(0);
    console.log(firstName);
    let secondName = await getNames(1);
    console.log(secondName);
    //await getNames(2);

    //The rest of the code only happens after the promise finishes
  } catch (error) {
    console.log(error);
  } finally {
    console.log('Runs no matter what');
  }
};

multipleNames();
