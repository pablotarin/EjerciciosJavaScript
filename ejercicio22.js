const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (let i = foodSchedule.length - 1; i >= 0; i--) {
  const f = foodSchedule[i];
  let fruitIndex = 0;
  if (!f.isVegan && fruitIndex < fruits.length) {
      f.name = fruits[i];
      f.isVegan = true;
      fruitIndex++;
  }
}

console.log(foodSchedule);
