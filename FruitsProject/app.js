//jshint esversion:6

const mangoose = require('mongoose');

mangoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

// mangoose.connect("mongodb://localhost:27017/personDB", { useNewUrlParser: true });
const fruitSchema = new mangoose.Schema({
  name : {
    type: String,
    // required: [true, "Please check your data entry, no name specified"]
  },
  rating: {
   type : Number,
   min:1,
   max: 10
  },
  review: String
});

const Fruit = mangoose.model("Fruit", fruitSchema);

const fruit = new Fruit({

  rating: 7,
  review : "Pretty solid as fruit"

});

// fruit.save();


const personSchema = new mangoose.Schema({
  name : String,
  age : Number
});

const Person = new mangoose.model("Person", personSchema);

const person = new Person({
name: "John",
age: 32
});


// person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "The best fruit"
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   score: 4,
//   review: "Too sour for me"
// });
//
// const banana = new Fruit({
// name: "Banana",
// score: 10,
// review:"Really good"
// });

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err){
//     console.log(err);
//   }else{
//     console.log("successfully saved all the fruits to the fruitsDB");
//   }
// });



Fruit.find(function(err, fruits){
  if (err){
    console.log(err);
  } else{
    mangoose.connection.close();

   fruits.forEach(function(fruit){
     console.log(fruit.name);
   });

  }

});

Fruit.updateOne("_id: ", {name: "Peach"}, function (err){
  if (err){
    console.log(err);
  }else {
    console.log("successfully updated the document");

  }
});

Fruit.deleteOne("_id:", function(err){
  if (err){

  }else{

  }
});

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
//
// // Connection URL
// const url = 'mongodb://localhost:27017';
//
// // Database Name
// const dbName = 'fruitsDB';
//
// // Create a new MongoClient
// const client = new MongoClient(url, { useNewUrlParser: true });
//
// // Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//
//   const db = client.db(dbName);
//
//   findDocuments(db, function() {
//     client.close();
//      });
//
// });
//
//
//
// const insertDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Insert some documents
//   collection.insertMany([
//     {name: "apple",
//     score: 8,
//     reviews: "Great fruit"
//   },
//      { name: "Orange",
//      score: 6,
//      reviews: "Kinda sour"
//    },
//       {name: "Banana",
//       score: 9,
//       reviews: "Great stuff"
//        }
//
//   ], function(err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.result.n);
//     assert.equal(3, result.ops.length);
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// };
//
// const findDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Find some documents
//   collection.find({}).toArray(function(err, fruits) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits);
//     callback(fruits);
//   });
// };
