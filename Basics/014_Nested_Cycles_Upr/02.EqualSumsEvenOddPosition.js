function solve(inp1, inp2) {
    let num_1 = Number(inp1)
    let num_2 = Number(inp2)
    let resStr = "";
    for( let i = num_1; i <= num_2; i++){
        
        let num = i.toString();
        let sum_1 = Number(num[0]) + Number(num[2]) + Number(num[4]);
        let sum_2 = Number(num[1]) + Number(num[3]) + Number(num[5]);
        if(sum_1 === sum_2) resStr += `${num} `;
    }   
    console.log(resStr);    
}

//solve("100000", "100050");
//solve("123456","124000");
//solve("299900","300000");
solve("100115","100120");
    
    
    
