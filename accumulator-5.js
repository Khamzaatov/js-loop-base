const arr = [2, 5, 6, -8, 10, 11, -12, 19, -16, 25, 20];
let accumulatorEven = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    accumulatorEven.push(arr[i])
  }
}
console.log(accumulatorEven)