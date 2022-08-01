/* 
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. 
*/

const maxProfit = (prices) => {
    
    let left = 0; 
    let right = 1;
    
    let maxprofit = 0;
    
    while(right < prices.length){
        
        if(prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];
            
            maxprofit = Math.max(maxprofit, profit);
        } else {
            left = right;
        }
        right++;
    }
  
     return maxprofit;   
    
};

console.log(maxprofit([7, 2, 4, 1]));
