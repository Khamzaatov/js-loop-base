const arr = [2, 4, 6, -8, 10, -12, 14, -16, 18, 20]
let i = 0;
let sum = 0
while (i < arr.length) {
 if (arr[i] > 0) {
   sum += arr[i]
 }
 i++
}
console.log(sum)