function maxProfit(prices){
    let buy = prices[0], maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
 
        if(buy > prices[i])
            buy = prices[i];
 
        else if (prices[i] - buy > maxProfit)
            maxProfit = prices[i] - buy;
    }
    return maxProfit;
}
 
console.log(maxProfit([ 7, 1, 5, 6, 4 ]));      //! => 5
console.log(maxProfit([ 7, 6, 4, 3, 1 ]));      //! => 0