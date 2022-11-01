// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

const happyNumber = (n) => {
   
    let seen = new Set();

    while(!seen.has(n)){ 
        seen.add(n);
         sqSum = 0;

        while(n > 0){ //this iterates through the digits
            sqSum += (n%10) * (n%10);
            n = Math.floor(n/10);
        }

        if(sqSum == 1) return true;

        n = sqSum;
    }

    return false;

}