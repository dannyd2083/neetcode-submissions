class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
       let left = 0
       let right = heights.length - 1
       let max_area = 0
       while( left < right){
        let left_h = heights[left]
        let right_h = heights[right]
        let lower = Math.min(right_h , left_h)
        let area = (right - left) * lower
        max_area = Math.max(max_area, area)
        if(lower === right_h){
            right--
        }else if (lower === left_h){
            left++
        }
       }
       return max_area 
    }
}
