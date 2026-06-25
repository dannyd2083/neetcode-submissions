class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let g_map = new Map()
        let ans = []
        for (let str of strs){
            let key = str.split("").sort().join("")
            if(!g_map.has(key)){
                
                g_map.set(key,[])
            }
            g_map.get(key).push(str)
        }

        for(const [key, value] of g_map){
            ans.push(value)
        }
        return ans
    }
}
