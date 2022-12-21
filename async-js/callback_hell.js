// console.log('Hello, world!');
// setTimeout(() => {
//   console.log('HELP...');
//   setTimeout(() => {
//     console.log('HELP... AGAIN');
//   }, 1000);
// }, 1000);

const delayedText = (newText, delay, doNext) => {
  setTimeout(() => {
    console.log(newText);
    doNext();
  }, delay);
};

delayedText('Hello, world', 2000, () => {
  delayedText('Hello, again', 1000, () => {});
});
