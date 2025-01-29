function solve(inp1, inp2) {
    let num_1 = Number(inp1), num_2 = Number(inp2);    
    let str_1 = num_1.toString(); let str_2 = num_2.toString();
    let f1 = Number(str_1[0]), f2 = Number(str_1[1]), f3 = Number(str_1[2]), f4 = Number(str_1[3]) ;
    let s1 = Number(str_2[0]), s2 = Number(str_2[1]), s3 = Number(str_2[2]), s4 = Number(str_2[3]) ;
    let a1 = Math.min(f1,s1) , a2 = Math.min(f2,s2) , a3 = Math.min(f3,s3) , a4 = Math.min(f4,s4)  ;
    let b1 = Math.max(f1,s1) , b2 = Math.max(f2,s2) , b3 = Math.max(f3,s3) , b4 = Math.max(f4,s4)  ;
    let stringToPrint = "";
    let d1 = "" , d2 = "" , d3 = "" , d4 = "" ;
    
    for(let i = a1; i <= b1; i++){          
        if (i % 2 !== 0) {
            d1 = i.toString(); 
            for(let j = a2; j <= b2; j++){
                if (j % 2 !== 0) {
                    d2 = j.toString(); 
                    for(let k = a3; k <= b3; k++){
                        if (k % 2 !== 0) {
                            d3 = k.toString();
                            for(let v = a4; v <= b4; v++){
                                if (v % 2 !== 0) {
                                    d4 = v.toString();
                                    stringToPrint += `${d1}${d2}${d3}${d4} `;                                        
                                }
                            }
                        } else continue;
                    }
                } else continue;
            }
        }  else continue;      
       
    }
    
    console.log(stringToPrint);
}

solve(2345, 6789);
//solve(3256, 6579);
//solve(1365, 5877);