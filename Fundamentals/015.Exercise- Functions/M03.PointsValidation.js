function solve(inp) {
    let x1 = inp[0], y1 = inp[1], x2 = inp[2], y2 = inp[3] ;
    let valid = '';
    let distance = (x,y,v,w)=> {
        let dis =  Math.sqrt(Math.pow((x - v),2) + Math.pow((y - w),2));
        if(dis % 1 === 0) valid = 'valid';
        else valid = 'invalid';
        return dis;
    }
    let point1 = distance(x1, y1, 0, 0)  ;  console.log(`{${x1}, ${y1}} to {0, 0} is ${valid}`);
    let point2 = distance(x2, y2, 0, 0)  ;  console.log(`{${x2}, ${y2}} to {0, 0} is ${valid}`);
    let point3 = distance(x1, y1, x2, y2);  console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${valid}`);        
}

solve([3, 0, 0, 4]);
//solve([2, 1, 1, 1]);