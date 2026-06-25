class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min_price = 101
        let max_profit = 0
        for (let i =0; i<prices.length; i++){
            let val = prices[i]
            if(val > min_price){
                max_profit = Math.max(max_profit, val-min_price)
            }
            min_price = Math.min(min_price, prices[i])
        }
        return max_profit
    }
}
