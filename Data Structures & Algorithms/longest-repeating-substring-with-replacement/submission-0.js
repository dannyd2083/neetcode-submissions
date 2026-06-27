class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let maxLength = 0;
        let maxFreq = 0;
        let count = new Map();

        for (let right = 0; right < s.length; right++) {
            let val = s[right];

            count.set(val, (count.get(val) ?? 0) + 1);
            maxFreq = Math.max(maxFreq, count.get(val));

            while ((right - left + 1) - maxFreq > k) {
                count.set(s[left], count.get(s[left]) - 1);
                left++;
            }

            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
