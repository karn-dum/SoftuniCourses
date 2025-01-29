function yardGreening(inp) {
    let area = Number(inp[0]);
    let price = area * 7.61 ;
    let finalPrice = price - price * 0.18 ;
    let discount = price - finalPrice;
    console.log(`The final price is: ${finalPrice} lv."`);
    console.log(`The discount is: ${discount} lv.`);
    
    
}

yardGreening(["550"])