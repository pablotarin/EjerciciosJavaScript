const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let fruitIndex = 0;
for (let i = 0; i < foodSchedule.length; i++) {
  const f = foodSchedule[i];
  if (!f.isVegan && fruitIndex < fruits.length) {
      f.name = fruits[fruitIndex];
      f.isVegan = true;
      fruitIndex++;
  }
}

console.log(foodSchedule);
