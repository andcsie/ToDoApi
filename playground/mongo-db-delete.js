const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/ToDo", (error, db) => {
    if(error){
        return console.log("Unable to connect to DB!");
    }
    console.log("Connected!");
   
    //deleteMany
    // db.collection('Todos').deleteMany({text : "Eat lunch"}).then((result) => {
    //     console.log(result);
    // }) ;

    //deleteOne
    // db.collection('Todos').deleteOne({text : "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    //findandDelete
    // db.collection('Todos').findOneAndDelete({completed : false}).then((result) => {
    //     console.log(result);
    // });

    //challenge
    // db.collection('Users').deleteMany({name : "Vasile"}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').find({name : "Andrei"}).count().then((result) => {
    //     console.log(result);
    // });

    var idToDelete = function deleteById(){
        db.collection('Users').findOne({name : "Andrei"}, (err, user) => {
            if (err){
                return "Something went wrong!";
            }else{
                return user._id;
            }
        });
    };

    module.exports.deleteById = deleteById;


});