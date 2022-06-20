// Sort arrays of 0s, 1s and 2s
function mySort(arr,start,elem){
    let i = start, j = i + 1;
    while(i <= j && j < arr.length){
        if(arr[j] !== elem)
            j++;
        else{
            [arr[i + 1],arr[j]] = [arr[j],arr[i + 1]];
            i++;j++;
        }
    }
    return i;
}
function sortFunc(arr){
    let start = mySort(arr,-1,0)    
    mySort(arr,start,1)
    return arr;
}
console.log(sortFunc([0, 2, 1, 2, 0, 2, 1, 0, 0, 2, 2 , 0, 1]))