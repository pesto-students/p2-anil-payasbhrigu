function findTownJudge(arr,n){
    let trust = new Array(n+1).fill(0).map(()=>Array(2).fill(0))
    for(const pair of arr){
        trust[pair[0]][0]+=1
        trust[pair[1]][1]+=1
    }
    for (let i = 1;i<trust.length;i++) {
        if (trust[i][0] == 0 && trust[i][1] == n-1)
            return i
    }
    return -1
}
let arr = [[1,3],[2,3]]
console.log(arr,'==>',findTownJudge(arr,3))  //! => 3
arr = [[1,2]]
console.log(arr,'==>',findTownJudge(arr,2))  //! => 2
arr = [[1,3],[2,3],[3,1]]
console.log(arr,'==>',findTownJudge(arr,3))  //! => 2