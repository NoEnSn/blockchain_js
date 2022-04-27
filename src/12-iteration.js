let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//forEach
let fish = ["piranha", "barracuda", "cod", "eel"];

fish.forEach((individualFish) => {
  console.log(individualFish);
});

//map
let fish2 = ["piranha", "barracuda", "cod", "eel"];

let printFish = fish2.map((individualFish) => {
  console.log(individualFish);
});

console.log("printFish", printFish);

//filter
let seaCreatures = ["shark", "whale", "squid", "starfish"];
console.log(seaCreatures);

let filterdList = seaCreatures.filter((creature) => {
  return creature[0] === "s";
});

console.log(filterdList);

//for -in(for of는 조금 다름)
const store = {
  snack: 1000,
  beverage: 2000,
  flower: 3000
};

for (const item in store) {
  console.log(" item => ", item);

  if (!store.hasOwnProperty(item)) continue;

  console.log(item + "의 가격은 " + store[item] + "입니다.");
}
