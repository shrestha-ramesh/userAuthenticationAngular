const MongoClient=require("mongodb").MongoClient;
const assert=require('assert')
const {mongoKey}=require('./credentials')

MongoClient.connect(mongoKey,{ useUnifiedTopology: true },(error,client)=>{
    assert.equal(null, error);
    console.log("Connected successfully to server");
    console.log(client)
})