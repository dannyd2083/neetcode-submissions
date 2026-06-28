class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let match = new Map()
        for (let s of s1){
            match.set(s, (match.get(s) ?? 0) + 1);
        }
        let window = new Map();
        let left = 0
        let window_sz = s1.length
        
        for (let right = 0; right<s2.length ; right++){
            let val = s2[right]
            window.set(val, (window.get(val) ?? 0) + 1);
            while(right-left+1 > window_sz){
                let leftChar = s2[left];
                window.set(leftChar, window.get(leftChar) - 1);
                if (window.get(leftChar) === 0) {
                    window.delete(leftChar);
                }
                left++;

            }
            if (right - left + 1 === window_sz) {
                if (this.sameMap(match, window)) {
                    return true;
                }
            }
        }
        return false;
    }

    sameMap(map1, map2) {
    if (map1.size !== map2.size) {
        return false;
    }

    for (let [key, val] of map1) {
        if (map2.get(key) !== val) {
            return false;
        }
    }

    return true;
}
}
