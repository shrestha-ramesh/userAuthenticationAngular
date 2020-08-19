const MongoClient = require("mongodb").MongoClient;
// const assert = require("assert");
const { mongoKey, dbName } = require("./credentials");
const db = (callback) =>
  MongoClient.connect(
    mongoKey,
    { useUnifiedTopology: true },
    (error, client) => {
        if(error){
            callback(null,error)
        }
      console.log("Connected successfully to server");
      callback(client.db(dbName).collection("users"));
    }
  )

// db((mydb,error)=>{  // fetching database using callback
//     console.log(mydb)
// })

module.exports = {
  db
};

// collection.insertOne({
//     email:'shresthashare@gmail.com',
//     password:'test12345'
// },(error,result)=>{
//     assert.equal(null,error)
//     assert.equal(1, result.result.n);
//     assert.equal(1, result.ops.length);
//     console.log("Inserted document into the collection");
// })
