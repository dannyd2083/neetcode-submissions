class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let count_map = new Map()
        for (let num of nums){
            if(count_map.has(num)){
                return true
            }
            count_map.set(num,1)
        }
        return false

    }
}
