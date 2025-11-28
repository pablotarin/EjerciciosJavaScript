const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];
const menores = [];
const mayores = [];

for(let u of users){
    if(u.years < 18){
        menores.push(u);
    } else {
        mayores.push(u);
    }
}

console.log("Usuarios menores de edad:");
console.log(menores);
console.log("\n\nUsuarios mayores de edad:");
console.log(mayores);