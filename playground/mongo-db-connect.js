const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/ToDo", (error, db) => {
    if(error){
        return console.log("Unable to connect to DB!");
    }
    console.log("Connected!");
    // db.collection("Todos").insertOne({
    //     text : "Something to do",
    //     completed : false
    // }, (err, result) => {
    //     if (err){
    //         return console.log("Unable to insert todo!");
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection("Users").insertOne({
    //     name : "Vasile",
    //     age : 26,
    //     location : "Ploiesti"
    // }, (err, result) => {
    //     if (err){
    //         return console.log("Unable to insert todo!");
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });
    db.close();
});