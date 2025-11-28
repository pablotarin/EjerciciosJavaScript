const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

const pPeq = []
const pMed = []
const pGra = []

for (let m of movies){
    let time = m.durationInMinutes;
    if(time < 100){
        pPeq.push(m);
    } else if (time > 100 && time < 200){
        pMed.push(m);
    } else {
        pGra.push(m);
    }
}

console.log(pPeq);
console.log(pMed);
console.log(pGra);