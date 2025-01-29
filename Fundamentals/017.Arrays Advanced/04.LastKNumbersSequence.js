function solve(n, k) {

    let result = [1];
    for( let i = 1; i < n; i++ ){
        let elements = result.slice(-k);
        let current = elements.reduce((acc, value) => acc + value , 0);                
        //let current = 0;
        // for ( let num of elements ) {
        //     current += num;
        // }
        result.push(current);
    }

    console.log(result.join(' '));
    

}

solve(6, 3);
solve(8, 2);
solve(9, 5);

// {
//     let arr = "1".repeat(n).split("").map(Number);
//     let res = [1];
//     for (let i = 1; i < n; i++) {
//       let temp = [];
//       let sum = 0;
//       if (i < k) {
//         temp = arr.slice(0, i);
//       } else {
//        temp = res.slice(i - k, i+1);
//       }
  
//       sum = temp.reduce((acc, value) => acc + value , 0);
//       res.push(sum);
//     }
//     console.log(res);
//   }