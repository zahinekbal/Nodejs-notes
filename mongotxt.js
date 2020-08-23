//Inserting data in mongo db

use harryKart
db.items.insertOne({name: "Samsung 30s",price: 22000,rating: 4.5,qty: 233,sold: 98})

db.items.insertMany([ {name: "Moto 30s",price: 29000,rating: 3.5,qty: 133,sold: 98} ,
{name: "Samsung 30s",price: 22000,rating: 4.5,qty: 233,sold: 598},
{name: "Vivo 30s",price: 55000,rating: 4.9,qty: 633,sold: 998,isbig:true} ])