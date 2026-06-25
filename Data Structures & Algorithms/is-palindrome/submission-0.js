class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const s_array = s.toLowerCase().split("").filter(char => /[a-z0-9]/i.test(char));
        let stack = []
        let ans = true
        for (let i = 0 ; i< s_array.length ; i++){
            stack.push(s_array[i])
        }
        console.log(stack)
        for (let i = 0 ; i< s_array.length; i++){
            let val = stack.pop()
            console.log("val: "+val)
            console.log("array_val: "+ s_array[i])
            if(val !==  s_array[i]){
                return false 
            }
        }
        return ans
    }
}
