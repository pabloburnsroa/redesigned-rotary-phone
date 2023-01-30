// axios
//   .get('https://swapi.dev/api/people/1/')
//   .then((res) => console.log(res))
//   .catch((e) => {
//     console.log(e);
//   });

const getStarWarsPerson = async () => {
  const res = await axios.get('https://swapi.dev/api/people/1/');
  console.log(res.data);
};
