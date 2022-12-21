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

fakeRequestPromise('url.com/page1')
  .then((data) => {
    console.log('It worked...');
    console.log(data);
    return fakeRequestPromise('url.com/page2');
  })
  .then((data) => {
    console.log('It worked... 2');
    console.log(data);

    return fakeRequestPromise('url.com/page3');
  })
  .then((data) => {
    console.log(data);

    console.log('It worked... 3');
  })
  .catch((err) => {
    console.log(err);
    console.log('A request has failed...');
  });
