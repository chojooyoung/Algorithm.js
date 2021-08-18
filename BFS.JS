function solution(n,vertex){
    return bfs(1,vertex,n);
}

const bfs=(start,arr,end)=>{
    const visited =new Array(end+1).fill(false);
    const lenn = new Array(end+1).fill(0);
    const queue = [start];
    visited[start]=true;
    while (queue.length){
        const head = queue.shift();//검사할 숫자 1이면 1이 있는 요소를 탐색
        console.log('head:',head);
        const len = lenn[head]+1;//길이 ex)1,3 3,4면 1->3은 1,  1->4는 2
        console.log('lenn:',len);
        for (let i of arr){
            console.log(i);
            if(i[0]===head&& !visited[i[1]]){
                console.log(i[1]);
                queue.push(i[1]);
                visited[i[1]] =true;
                console.log(visited[i[1]]);
                lenn[i[1]]=len;
                console.log(lenn[i[1]]);
            }
            else if(i[1]===head && !visited[i[0]]){
                queue.push(i[0]);
                console.log([i[1]]);
                visited[i[0]]=true;
                console.log(visited[i[1]]);
                lenn[i[0]]=len;
                console.log(lenn[i[0]]);
            }
            //console.log('큐:',queue);

        }

    }
    console.log(lenn);
    const max=Math.max.apply(null,lenn);
    console.log(max);
    return lenn.filter((i=> i === max)).length;

}

n=6;
vertex=[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]
console.log(solution(n,vertex));