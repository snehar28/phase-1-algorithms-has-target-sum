function hasTargetSum(array, target) {
  // Write your algorithm here
    for (let i = 0; i < array.length; i++) {
      const result = target - array[i]
      for (let j = i + 1; j < array.length; j++) {
        if (result === array[j]) {
          return true;
        } 
      }
    }
    return false;
}

/* 
  Write the Big O time complexity of your function here
  0(n^2)
*/

/* 
  Add your pseudocode here
  let i=0 in array, i<array.length, i++
  let result = target - integer
  check array[i+1]
  if result === array[i+1], return true
  else next i
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
