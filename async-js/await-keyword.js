import { delayedColorChange } from './creatingPromises.js';

async function rainbow() {
  await delayedColorChange('red', 1000);
  await delayedColorChange('orange', 1000);
  await delayedColorChange('yellow', 1000);
  await delayedColorChange('green', 1000);
  await delayedColorChange('blue', 1000);
  return 'ALL DONE.';
}

async function printRainbow() {
  await rainbow();
  console.log('End');
}

// printRainbow();

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject('Connection Timeout');
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

async function makeTwoRequests() {
  try {
    let data1 = await fakeRequestPromise('/page1');
    console.log(data1);
  } catch (error) {
    console.log(error);
  }
}

makeTwoRequests();
