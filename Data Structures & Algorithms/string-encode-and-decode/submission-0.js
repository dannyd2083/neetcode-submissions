class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const parts = [];
        for(let str of strs){
              parts.push(str.length);
              parts.push("#");
              parts.push(str);
        }
        return parts.join("")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
          const res = [];
          let i = 0;
        while(i < str.length){
            let j = i;
            while(str[j]!== '#'){
                j++
            }
            const len = Number(str.slice(i, j));
            const start = j + 1;
            const s = str.slice(start, start + len);
            res.push(s);
            i = start + len;
        }
         return res;
    }
}
