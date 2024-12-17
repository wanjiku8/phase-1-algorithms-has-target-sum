function hasTargetSum(array, target) {
  // Create a Set to store numbers we've already seen
  const seenNumbers = new Set();

  // Loop through each number in the array
  for (const number of array) {
    // Calculate the complement of the current number
    const complement = target - number;

    // If the complement is already in the Set, return true
    if (seenNumbers.has(complement)) {
      return true;
    }

    // Add the current number to the Set
    seenNumbers.add(number);
  }

  // If no pair sums to the target, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here:
  - Time Complexity: O(n), where n is the length of the input array.
    We iterate through the array once, and Set operations (add, has) take O(1) time.

  - Space Complexity: O(n), because in the worst case, all n numbers are added to the Set.
*/

/* 
  Add your pseudocode here:
  1. Create an empty Set to store seen numbers.
  2. Loop through each number in the array:
       a. Calculate the complement (target - number).
       b. If the complement exists in the Set, return true.
       c. Otherwise, add the current number to the Set.
  3. If no pairs are found, return false.
*/

/*
  Add written explanation of your solution here:
  The function iterates through the input array and uses a Set to store numbers we've already seen.
  For each number, it calculates the complement (target - number). 
  If the complement is found in the Set, it means there’s a pair of numbers that adds up to the target, so we return true.
  If we finish the loop without finding such a pair, we return false.

  The Set ensures that checking for complements and adding numbers is efficient (O(1) time complexity for each operation).
*/


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

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 10));
}

module.exports = hasTargetSum;

