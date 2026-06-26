class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max_length = 0
        let substring = new Set()
        let left = 0;
        for (let i = 0; i<s.length; i++){
            let val = s[i]

            while(substring.has(val)){
                substring.delete(s[left]);
                left++;
            }

            substring.add(val);

            max_length = Math.max(max_length, i - left+1 );
        }
        return max_length

    }
}
