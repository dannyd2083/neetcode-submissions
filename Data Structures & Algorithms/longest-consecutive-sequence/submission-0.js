class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set()
        let ans = 0;
        let count = 1;
        for (let num of nums){
            numSet.add(num)
        }
        for (let i = 0; i<nums.length ; i++){
            let val = nums[i]
            if(numSet.has(val-1)){
                continue;
            }
            let current = val;
            let count = 1;
            while (numSet.has(current + 1)) {
                current++;
                count++;
            }
            ans = Math.max(ans, count);
        }
        return ans
    }
}
