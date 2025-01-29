let obj = { Ivan: 5, Petkan: 7, Dragan: 0, Pesho: 6 };
let result = Object.entries(obj);

result.forEach((el) => {
  console.log(el.join(',').split(' '));
  
  
});
