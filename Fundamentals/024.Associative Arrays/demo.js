function solve() {

    let map = new Map();
    map.set(1, 'One');
    map.set(2, 'Two');

    for( let key of map.values() ){
        console.log(key);
        
    }
    console.log(map.values());
    
    
    
}

solve();