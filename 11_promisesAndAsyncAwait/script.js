//Activity 1
//Task 1

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promise one complete");
    resolve();
  }, 2000);
});
promiseOne.then(function () {
  console.log("Promise one resolve");
});
//Task 2
new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      console.log("Promise two complete");
      resolve();
    } else {
      reject("Error : Something went wrong!");
    }
  }, 2000);
})
  .then(function () {
    console.log("promise two resolve");
  })
  .catch(function (error) {
    console.log(error);
  });
  
//Acrivity 2
//Task 3

const user = {
  name: "MH Saikat",
  profession: "Web Developer",
  skills: ["Javascript", "HTML", "CSS"],
};
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(user);
  }, 2000);
});
promiseThree
  .then(function (user) {
    return user.skills;
  })
  .then(function (skills) {
    return skills[0];
  })
  .then(function (value) {
    console.log(value);
  });

//Activity 3
//Task 4

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({
        langName: "Javascript",
        price: 350,
      });
    } else {
      reject("Error: No course found");
    }
  }, 2000);
});

async function course() {
  try {
    const response = await promiseFour;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
course();
//Task 5
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({
        langName: "Javascript",
        price: 350,
      });
    } else {
      reject("Error: No course found");
    }
  }, 2000);
});

async function buyCourse() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
buyCourse();

//Activity 4
//Task 6

fetch("https://api.github.com/users/mh-saikat")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
//Task 7
async function handleApi() {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  const data = await response.json();
  try {
    console.log(data);
  } catch (error) {
    console.log("Error", error);
  }
}
handleApi();

//Activity 5
//Task 8

const promiseSix = Promise.resolve("promise resolve");
const promiseSeven = 35;
const promiseEight = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Task Complite");
  }, 100);
});
Promise.all([promiseSix, promiseSeven, promiseEight]).then(function (value) {
  console.log(value);
});

//Task 9
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Slow");
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "First");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
});
