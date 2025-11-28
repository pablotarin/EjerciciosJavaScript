const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'},
    {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

for (let i = placesToTravel.length - 1; i >= 0; i--){
    let p = placesToTravel[i];
    if(p.id === 11 || p.id === 40){
        placesToTravel.splice(i, 1)
    }
}

console.log(placesToTravel)