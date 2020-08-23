//for updating one item
db.items.updateOne( {name: "Moto 30s"}, {$set: {price: 2}})
//means
//before updating
{ "_id" : ObjectId("5f4159768051c23b3e2886ae"), "name" : "Moto 30s", "price" : 29000, "rating" : 3.5, "qty" : 133, "sold" : 98 }
{ "_id" : ObjectId("5f4159768051c23b3e2886b0"), "name" : "Vivo 30s", "price" : 55000, "rating" : 4.9, "qty" : 633, "sold" : 998 }
{ "_id" : ObjectId("5f415a528051c23b3e2886b1"), "name" : "Moto 30s", "price" : 29000, "rating" : 3.5, "qty" : 133, "sold" : 98 }
{ "_id" : ObjectId("5f415a528051c23b3e2886b3"), "name" : "Vivo 30s", "price" : 55000, "rating" : 4.9, "qty" : 633, "sold" : 998, "isbig" : true }
{ "_id" : ObjectId("5f416cbd8051c23b3e2886b5"), "name" : "Moto 30s", "price" : 29000, "rating" : 3.5, "qty" : 133, "sold" : 98 }
{ "_id" : ObjectId("5f416cbd8051c23b3e2886b6"), "name" : "Samsung 30s", "price" : 22000, "rating" : 4.5, "qty" : 233, "sold" : 598 }
{ "_id" : ObjectId("5f416cbd8051c23b3e2886b7"), "name" : "Vivo 30s", "price" : 55000, "rating" : 4.9, "qty" : 633, "sold" : 998, "isbig" : true }
//after upadating
> db.items.find()
{ "_id" : ObjectId("5f4159768051c23b3e2886ae"), "name" : "Moto 30s", "price" : 2, "rating" : 3.5, "qty" : 133, "sold" : 98 }
{ "_id" : ObjectId("5f4159768051c23b3e2886b0"), "name" : "Vivo 30s", "price" : 55000, "rating" : 4.9, "qty" : 633, "sold" : 998 }
{ "_id" : ObjectId("5f415a528051c23b3e2886b1"), "name" : "Moto 30s", "price" : 29000, "rating" : 3.5, "qty" : 133, "sold" : 98 }
{ "_id" : ObjectId("5f415a528051c23b3e2886b3"), "name" : "Vivo 30s", "price" : 55000, "rating" : 4.9, "qty" : 633, "sold" : 998, "isbig" : true }
{ "_id" : ObjectId("5f416cbd8051c23b3e2886b5"), "name" : "Moto 30s", "price" : 29000, "rating" : 3.5, "qty" : 133, "sold" : 98 }
{ "_id" : ObjectId("5f416cbd8051c23b3e2886b6"), "name" : "Samsung 30s", "price" : 22000, "rating" : 4.5, "qty" : 233, "sold" : 598 }
{ "_id" : ObjectId("5f416cbd8051c23b3e2886b7"), "name" : "Vivo 30s", "price" : 55000, "rating" : 4.9, "qty" : 633, "sold" : 998, "isbig" : true }

//update Many
db.items.updateMany( {name: "Moto 30s"}, {$set: {price: 3,rating: 1}})
//means after update manyone 
> db.items.find()
{ "_id" : ObjectId("5f4159768051c23b3e2886ae"), "name" : "Moto 30s", "price" : 3, "rating" : 1, "qty" : 133, "sold" : 98 }
{ "_id" : ObjectId("5f4159768051c23b3e2886b0"), "name" : "Vivo 30s", "price" : 55000, "rating" : 4.9, "qty" : 633, "sold" : 998 }
{ "_id" : ObjectId("5f415a528051c23b3e2886b1"), "name" : "Moto 30s", "price" : 3, "rating" : 1, "qty" : 133, "sold" : 98 }
{ "_id" : ObjectId("5f415a528051c23b3e2886b3"), "name" : "Vivo 30s", "price" : 55000, "rating" : 4.9, "qty" : 633, "sold" : 998, "isbig" : true }
{ "_id" : ObjectId("5f416cbd8051c23b3e2886b5"), "name" : "Moto 30s", "price" : 3, "rating" : 1, "qty" : 133, "sold" : 98 }
{ "_id" : ObjectId("5f416cbd8051c23b3e2886b6"), "name" : "Samsung 30s", "price" : 22000, "rating" : 4.5, "qty" : 233, "sold" : 598 }
{ "_id" : ObjectId("5f416cbd8051c23b3e2886b7"), "name" : "Vivo 30s", "price" : 55000, "rating" : 4.9, "qty" : 633, "sold" : 998, "isbig" : true }
