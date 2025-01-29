
console.log(JSON.stringify( createPerson('Peter', 'Pan', 12), null, 2));
// console.log(' Ivan');
// console['log'](' Ivan');

//----------------------------------------------------------------------------------------------------------
function createPerson(firstName, lastName, age) {
    
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person['age'] = age;

    return person;    
}

//console.log(createPerson('Peter', 'Pan', 12));
//----------------------------------------------------------------------------------------------------------
class Dog {
    constructor() {
      this.speak = () => {
        console.log('Woof');
        this.color = 'white';
      }
    }      
  }
  
  let dog = new Dog();
  dog.bau = ()=>console.log('bau');
  //dog.bau();
//   dog['bau']();
//   dog['speak']();
//   console.log(dog.color);
  
//   console.log(JSON.stringify(dog));
  
//dog.speak(); 
// let entries = Object.entries(dog);
// for (let el of entries) console.log(el);

//   for (let [key, value] of entries) {
//     console.log(`${key} -> ${value}`);
//   }

//----------------------------------------------------------------------------------------------------------

function convertJSON(name, lastName, hairColor) {
  let person = {
      name,
      lastName,
      hairColor,
  };


//   console.log(JSON.stringify(person));
//   let man = JSON.parse(JSON.stringify(person));
//   let entries = Object.entries(man);
//   for (let [key, value] of entries) {
//     console.log(`${key} -> ${value}`);
//   }
let entries = Object.entries(person);
for (let [key, value] of entries) {
    console.log(`${key} -> ${value}`);
  }
}

//convertJSON('George','Jones','Brown');

//----------------------------------------------------------------------------------------------------------
function cityInfo(city) {
  let parsedCity = JSON.parse(city);
  let entries = Object.entries(parsedCity);
  // for (let el of entries) console.log(el);

  for (let [key, value] of entries) {
    console.log(`${key} -> ${value}`);
  }
}

//cityInfo('{"name": "George","age": 40,"town": "Sofia"}');

//cityInfo('{"name": "Ivan","age": 25,"grades": {"Math": [2.50, 3.50],"Chemistry": [4.50]}}');

// cityInfo({
//   name: 'Sofia',
//   area: 492,
//   population: 1238438,
//   country: 'Bulgaria',
//   postCode: 1000
// });
