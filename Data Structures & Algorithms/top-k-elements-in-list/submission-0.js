class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let count_map = new Map()
        let ans = []
        for (let num of nums){
            if (!count_map.has(num)){
                count_map.set(num,0)
            }
            count_map.set(num, count_map.get(num)+1)
        }
        console.log(count_map)
        
        let count_array = Array.from(count_map.entries()).sort((a, b) => b[1] - a[1])
        console.log(count_array)

        for (let i = 0 ; i < k ; i++ ){
            ans.push(count_array[i][0])
        }

        return ans
    }
}
