async function hello() {
  console.log('I return a promise because i am an async function');
}

const hello2 = async () => {
  throw 'OH NO, PROBLEM';
  return 'I am also an async function that returns a promise';
};

// hello2()
//   .then((data) => {
//     console.log('Promise resolved with: ', data);
//   })
//   .catch((err) => {
//     console.log('OH NO PROMISE REJECTED');
//     console.log(err);
//   });

const login = async (username, password) => {
  if (!username || !password) throw 'Missing Credentials';
  if (password === 'password123') return 'Welcome';
  throw 'Invalid Password';
};

login('qwertyuiop', 'password123')
  .then((msg) => console.log('Logged In:', msg))
  .catch((err) => console.log(err));
