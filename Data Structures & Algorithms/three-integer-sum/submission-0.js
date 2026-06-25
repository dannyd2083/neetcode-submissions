class Solution {
    threeSum(nums) {
        nums.sort((a, b) => a - b);

        let ans = [];

        for (let i = 0; i < nums.length; i++) {
            // skip duplicate fixed number
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            // pair target should be -nums[i]
            let pairs = this.find_pair(nums, i + 1, -nums[i]);

            for (const pair of pairs) {
                ans.push([nums[i], pair[0], pair[1]]);
            }
        }

        return ans;
    }

    find_pair(nums, start, target) {
        let left = start;
        let right = nums.length - 1;
        let res = [];

        while (left < right) {
            let sum = nums[left] + nums[right];

            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            } else {
                res.push([nums[left], nums[right]]);

                left++;
                right--;

                // skip duplicate left values
                while (left < right && nums[left] === nums[left - 1]) {
                    left++;
                }

                // skip duplicate right values
                while (left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            }
        }

        return res;
    }
}