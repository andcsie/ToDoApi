const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/ToDo", (error, db) => {
    if(error){
        return console.log("Unable to connect to DB!");
    }
    console.log("Connected!");
    
    // db.collection("Todos").find(
    //     {_id : new ObjectID("5a1c8d6c38774b09f041efc8")}
    // ).toArray().then((docs)=>{
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) =>{
    //     console.log(err);
    // });
        
    // db.collection("Todos").find().count().then((count)=>{
    //     console.log(`Todos count :`, count );
    // }, (err) =>{
    //     console.log(err);
    // });

    db.collection("Users").find({name : "Andrei"}).count().then((count) =>{
        console.log(count);
    }, (err) => {
        console.log(err);
    })
    // db.close();
});