const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

for (let p of products){
    if (p.sellCount > 20){
        goodProducts.push(p);
    } else {
        badProducts.push(p);
    }
}

console.log(badProducts);
console.log(goodProducts);