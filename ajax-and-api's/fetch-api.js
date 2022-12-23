// fetch('https://swapi.dev/api/people/1/')
//   // the json() method of the response interface takes the response stream and reads it to completion.
//   .then((response) => {
//     console.log('First request has been resolved');
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return fetch('https://swapi.dev/api/people/2/');
//   })
//   .then((res) => {
//     console.log('Second request has been resolved...');
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => console.log(e));

const loadStarWarsChars = async () => {
  try {
    const res = await fetch('https://swapi.dev/api/people/1/');
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
