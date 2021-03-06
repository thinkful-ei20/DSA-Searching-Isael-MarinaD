const data = [128, 97, 121, 124, 98, 97, 105];

//you need find the min and max
// cheat option
// if the min is before the max
//  -> buy on min, sell on max
//brute force
//go through each item and test the profit to next day and subsequent days
// nested loop
// go through, set the min to the first element, set max also to first
// if max < min, keep going also save the index

// first check if the next item is greater or smaller(linked list)
// -> if smaller, delete the previous item
// -> if greater go to next one
// cant buy on last day, cant sell on first day

//if in binary tree buy on the farthest left node, then sell on its farthest right node

// input is an array, output number that is the max profit that could be made

function maxProfit(arr) {
  let maxProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    let dayProfit = 0;
    for (let k = i + 1; k < arr.length; k++) {
      if (data[k] - data[i] > dayProfit){
        dayProfit = data[k] - data[i];
      }
    }
    if (dayProfit > maxProfit){
      maxProfit = dayProfit;
    }
  }
  return maxProfit;
}

function maxProfitRecursive (arr, maxProfit = 0){
  if (arr.length <= 2){
    if (maxProfit < arr[1]-arr[0]){
      return arr[1]-arr[0];
    }
    else {
      return maxProfit;
    }
  }
  arr.shift();
  if (maxProfit > Math.max(...arr) - arr[0]){
    return maxProfitRecursive(arr, maxProfit);
  }
  else {
    maxProfit = Math.max(...arr) - arr[0];
    return maxProfitRecursive(arr, maxProfit);
  }
}

console.log(maxProfit(data));
console.log(maxProfitRecursive(data));