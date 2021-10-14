function plusMinus(arr) {
  // Write your code here
  let positive = 0;
  let negative = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];

    if (element > 0) {
      positive = positive + 1;
    } else if (element < 0) {
      negative = negative + 1;
    } else {
      zero = zero + 1;
    }
  }
  let size = arr.length;
  positive = positive / size;
  negative = negative / size;
  zero = zero / size;

  console.log(positive.toFixed(6));
  console.log(negative.toFixed(6));
  console.log(zero.toFixed(6));
}
plusMinus([1, 1, 0, -1, -1]);
