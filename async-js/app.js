const multiply = (x, y) => x * y;
const square = (x) => multiply(x, x);
const isRightTri = (a, b, c) => {
  return square(a) + square(b) === square(c);
};

const result = isRightTri(3, 4, 5);

console.log(result);

/*

...

multiply(4,4)
square(4)
isRightTri(3,4,5)

*/
