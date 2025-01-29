function solve(text) {
    let halfNum = Math.floor(text.length / 2);
    
    console.log(text.split('').slice(0,halfNum).reverse().join(''));
    console.log(text.split('').slice(-halfNum).reverse().join(''));     
    
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');
console.log('--------------------------------');

solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');