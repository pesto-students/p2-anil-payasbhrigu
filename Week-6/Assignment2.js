// Spiral Order Matrix
function spiralMatrix(arr){
    const result = [];
    let top = 0, bottom = arr.length - 1, left = 0, right = arr[0].length - 1;
    let dir = 0;
    while(top<=bottom && left<=right){
        if(dir == 0){
            for (let index = left; index <= right; index++) {
                const element = arr[top][index];
                result.push(element)
            }
            top+=1
            dir=1
        }
        else if(dir == 1){
            for (let index = top; index <= bottom; index++) {
                const element = arr[index][right];
                result.push(element)
            }
            right-=1
            dir=2
        }
        else if(dir == 2){
            for (let index = right; index >= left; index--) {
                const element = arr[bottom][index];
                result.push(element)
            }
            bottom-=1
            dir=3
        }
        else if(dir == 3){
            for (let index = bottom; index >= top; index--) {
                const element = arr[index][left];
                result.push(element)
            }
            left+=1
            dir=0
        }
    }
    return result
}

console.log("OUTPUT:\n", spiralMatrix([[1,2,3],[4,5,6],[7,8,9],[78,77,65]]))
// OUTPUT:
//  [
//    1,  2,  3, 6, 9,
//   65, 77, 78, 7, 4,
//    5,  8
// ]