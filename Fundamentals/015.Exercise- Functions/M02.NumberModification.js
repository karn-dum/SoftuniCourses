function solve(num) {
    let average = (num)=>{
        let strNum = num.toString();        
        let sum = 0;
        for(let i = 0; i < strNum.length; i++ ){
            sum += Number(strNum[i]);
        }
        return sum / strNum.length;
    };
    while (average(num) <= 5) {
        let strNum = num.toString();
        strNum += '9';
        num = Number(strNum);            
    }
    console.log(num);    
}

solve(101);
solve(5835);