const numbers = ["1", "2", "3", "4", "5"];

function logData(data) {
  for (const number of data) {
    console.log(number);
  }
}

const computeData = (data) => {
  let result = 0;
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    result += +element;
  }
  if (result > 100) {
    return 100;
  }
  return result;
};

logData(numbers);
logData(["a", "b"]);

console.log("result: ", computeData(numbers));
console.log("result: ", computeData(numbers));

const add = (a, b) => a + b;
const add2 = (a, b) => {
  console.log(a, b);
  return a + b;
};
function add3(a, b) {
  return a + b;
}

console.log(add(1, 2));
console.log(add2(2, 3));
console.log(add3(3, 4));
