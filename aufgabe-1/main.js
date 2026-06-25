const users = [
  {
    id: 1,
    name: "Ali",
    age: 34,
    country: "Germany",
    active: true,
    purchases: [120, 50, 300]
  },
  {
    id: 2,
    name: "Sara",
    age: 28,
    country: "France",
    active: false,
    purchases: [20, 80]
  },
  {
    id: 3,
    name: "Tom",
    age: 41,
    country: "Germany",
    active: true,
    purchases: [500, 100, 50]
  },
  {
    id: 4,
    name: "David",
    age: 22,
    country: "Italy",
    active: true,
    purchases: []
  }
];


const premuimusers = users.filter((user)=>{
    return user.active === true && user.country === "Germany"
}).map((user)=>{
    const total = user.purchases.reduce((summe, aktuellerWert) =>{
        return summe + aktuellerWert;
    }, 0);
    return {
        name : user.name,
        total: total
    }

});
console.log(premuimusers);

