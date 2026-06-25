class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        //1x2x4x6 = 48
        // without 1 = 48   48/1
        // withou 2 = 24.  48/2
        // w/th 4 = 12.   48/4
        // prefix array [1, 1, 2, 8]
        // sufix array [48,24, 6,1]

        // [-1,0,1,2,3]
        // prefix array [1, -1,0,0,0]
        // sufix array [0,  6,6,3,1]
        let prefix = [1]
        let suffix = Array(nums.length).fill(1)
        let pre_sum  = 1
        for (let i = 0; i< nums.length-1; i++){
            pre_sum = pre_sum * nums[i]
            prefix.push(pre_sum)
        }
        let su_product = 1;
        for (let i = nums.length-1; i>=0 ; i--){
            suffix[i] = su_product;
            su_product *= nums[i];
        }

        let ans = Array(nums.length).fill(0)

        for (let i = 0 ; i < nums.length; i++){
            ans[i] = suffix[i]*prefix[i]
        }

        return ans
        
    }
}
