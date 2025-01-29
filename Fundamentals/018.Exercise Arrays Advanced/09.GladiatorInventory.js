function solve(inp) {
  let command, equipment;
  let commands = {
    Buy: Buy,
    Trash: Trash,
    Repair: Repair,
    Upgrade: Upgrade,
  };
  let equipmentArr = inp.shift().split(" ");
  while (inp.length > 0) {
    [command, equipment] = inp.shift().split(" ");
    commands[command](equipmentArr, equipment);
  }

  console.log(equipmentArr);

  
}
//---
function Buy(equipmentArr, equipment) {
  if (!equipmentArr.includes(equipment)) {
    equipmentArr.push(equipment);
  }
}
//---
function Trash(equipmentArr, equipment) {
  if (equipmentArr.includes(equipment)) {
    equipmentArr.splice(equipmentArr.indexOf(equipment), 1);
  }
}
//---
function Repair(equipmentArr, equipment) {
  if (equipmentArr.includes(equipment)) {
    equipmentArr.splice(equipmentArr.indexOf(equipment), 1);
    equipmentArr.push(equipment);
  }
}
//---
function Upgrade(equipmentArr, equipment) {
  let [eqt, upgr ] = equipment.split('-');
  if( equipmentArr.includes(eqt) ) {
    equipmentArr.splice(equipmentArr.indexOf(eqt) + 1, 0, `${eqt}:${upgr}`);
  }
}
//----------------------------------------------------------------------------------------------------------------------
solve([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
solve(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']
    );
