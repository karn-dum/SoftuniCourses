function solve(inp) {
  let wArr = inp.slice();
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    };
  }

  let cats = [];
  while( wArr.length > 0 ){
   let [name, age] = wArr.shift().split(' ');
   cats.push( new Cat(name, age) );
  }
  
  for ( let el of cats ) el.meow();
  
}

solve(["Mellow 2", "Tom 5"]);
