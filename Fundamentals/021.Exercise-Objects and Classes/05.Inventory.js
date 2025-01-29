function solve(inp) {

    class Hero {
        constructor(hero, level, items) {
            this.hero = hero;        
            this.level = level;        
            this.items = items;        
        }
    }

    let heroes = [];

    while ( inp.length > 0 ) {
        let [hero, level, ...items] = inp.shift().split(' / ');
        level = Number(level);
        items = items.join('').split(', ').sort( (a, b) => a.localeCompare(b) );
        let heroObj = new Hero(hero, level, items);
        heroes.push(heroObj);
    }
    heroes.sort( (a, b) => a.level - b.level);
    heroes.forEach( el => {
        console.log(`Hero: ${el.hero}`);
        console.log(`level => ${el.level}`);
        console.log(`items => ${el.items.join(', ')}`);
        
    });
}

solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
