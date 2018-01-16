const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/ToDo", (error, db) => {
    if(error){
        return console.log("Unable to connect to DB!");
    }
    console.log("Connected!");
   
    // db.collection('Todos').findOneAndUpdate(
    //     {
    //         _id : new ObjectID("5a524b023c72486e27339032")
    //     },
    //     {
    //         $set: {
    //             completed : true
    //         }
    //     },
    //     {
    //         returnOriginal : false
    //     }
    // ).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate(
        {
            _id : new ObjectID("5a1c8e7fd1c0a6081cbfa63f")
        },
        {
            $set : {
                name : "Corin"
            },
            $inc : {
                age : 1
            }
        },
        {
            returnOriginal : false
        }
    ).then((update) => {
        console.log(update);
    });


});