// new Promise((resolve, reject) => {});

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    setTimeout(() => {
      if (random > 0.7) {
        resolve('Fake data is here...');
      }
      reject('Request error..');
    }, 2000);
  });
};

// fakeRequest('/dogs/1')
//   .then((data) => {
//     console.log('It worked...');
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log('error...');
//     console.error(err);
//   });

export const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`I changed to color: ${color}`);
      resolve();
    }, delay);
  });
};

// delayedColorChange('red', 1000)
//   .then(() => delayedColorChange('orange', 1000))
//   .then(() => delayedColorChange('yellow', 1000))
//   .then(() => delayedColorChange('green', 1000))
//   .then(() => delayedColorChange('blue', 1000))
//   .then(() => delayedColorChange('indigo', 1000))
//   .then(() => delayedColorChange('violet', 1000));
