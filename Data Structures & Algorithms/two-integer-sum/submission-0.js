class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let sum_map = new Map()
        let ans = []
        for(let i = 0; i<nums.length; i++){
            let reduce = target - nums[i]
            if(sum_map.has(reduce)){
                ans.push(i)
                ans.push(sum_map.get(reduce))
            }
            sum_map.set(nums[i],i)
        }
        return ans
    }
}
