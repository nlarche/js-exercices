const numbers = ["1", "2", "3", "4", "5"];

function logData(data) {
  data.forEach((elem) => console.log(elem));
}

const compute = (data) => {
  return data
    .map((value) => +value)
    .reduce((value, computed) => (computed += value), 0);
};

logData(numbers);
console.log("sum: ", doUnclearThing(numbers));
