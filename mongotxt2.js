//Searching for data in mongo db

use harryKart
//this query wil return all the objects with rating equal to 3.5
db.items.find({rating: 3.5})
//this query will give the rating objects whose rating is greater then nd equal to 3.5
db.items.find({rating: {$gte: 3.5}})
//this query will give the rating objects whose rating is greater then to 3.5
db.items.find({rating: {$gt: 3.5}})
//And operator
db.items.find({rating: {$gt: 3.5}, price: {$gt: 4000}})

//NOTES ;- (lt :- less then && gt:- greater then)

//OR query
db.items.find({ $or:[{rating: {$lt: 3.5}}, {price:{$gt: 4000}}] })

//This is called projection -mns we only want rating

db.items.find({rating: {$gt: 3.5}}, {rating: 1})
//means
{ "_id" : ObjectId("5f4157938051c23b3e2886ad"), "rating" : 4.5 }
{ "_id" : ObjectId("5f4159768051c23b3e2886af"), "rating" : 4.5 }
{ "_id" : ObjectId("5f4159768051c23b3e2886b0"), "rating" : 4.9 }
{ "_id" : ObjectId("5f415a528051c23b3e2886b2"), "rating" : 4.5 }
{ "_id" : ObjectId("5f415a528051c23b3e2886b3"), "rating" : 4.9 }

//for ratings nd qty only
db.items.find({rating: {$gt: 3.5}}, {rating: 1, qty: 1})
//means
{ "_id" : ObjectId("5f4157938051c23b3e2886ad"), "rating" : 4.5, "qty" : 233 }
{ "_id" : ObjectId("5f4159768051c23b3e2886af"), "rating" : 4.5, "qty" : 233 }
{ "_id" : ObjectId("5f4159768051c23b3e2886b0"), "rating" : 4.9, "qty" : 633 }
{ "_id" : ObjectId("5f415a528051c23b3e2886b2"), "rating" : 4.5, "qty" : 233 }
{ "_id" : ObjectId("5f415a528051c23b3e2886b3"), "rating" : 4.9, "qty" : 633 }
