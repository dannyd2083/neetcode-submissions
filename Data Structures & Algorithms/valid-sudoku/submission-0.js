class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowSet = new Set()
        let columnSet = new Set()
        let boxSet = new Set()
        let ans = true
        for(let i = 0; i< board.length ; i++){
            rowSet.clear()
            for (let j = 0; j<board[i].length; j++){
                const val = board[i][j];
                if (val === ".") continue;
                if (rowSet.has(val)){
                    return false
                }
                rowSet.add(val)
            }
        }

        for (let col = 0; col < 9; col++) {
            columnSet.clear();
            for (let row = 0; row < 9; row++) {
                const val = board[row][col];
                if (val === ".") continue;
                if (columnSet.has(val)){
                    return false
                }
                columnSet.add(val)
            }
        }

        for (let boxRow = 0; boxRow < 9; boxRow += 3) {
            for (let boxCol = 0; boxCol < 9; boxCol += 3) {
                boxSet.clear();
                for (let r = 0; r < 3; r++) {
                    for (let c = 0; c < 3; c++) {
                        const val = board[boxRow + r][boxCol + c];
                        if (val === ".") continue;
                        if (boxSet.has(val)) {
                            return false;
                        }
                        boxSet.add(val);
                    }
                }
            }
        }

        return ans
    }
}
