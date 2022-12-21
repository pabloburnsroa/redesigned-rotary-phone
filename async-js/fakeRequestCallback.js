const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure('Connection Timeout!');
    } else {
      success(`Here is some fake data from ${url}`);
    }
  }, delay);
};

const fakeRequestCB = fakeRequestCallback(
  'randomurl.com/page1',
  function (response) {
    console.log('It works...');
    console.log(response);
    fakeRequestCallback('books.com/page2', function (response) {
      console.log('It works... again');
      console.log(response);
    });
  },
  function (err) {
    console.log('Error...', err);
  }
);

fakeRequestCB;
