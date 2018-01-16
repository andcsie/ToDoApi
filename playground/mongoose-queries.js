const {mongoose} = require('./../server/db/mongoose');
const {ToDo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectId} = require('mongodb');
const id = '5a5d1cbc8e5a541f249dcaaf11';
const userId = '1234a5d21fc7677d72104f124eb';

// ToDo.find({
//     _id : id
// }).then((todos) => {
//     console.log(todos);
// }).catch((err) => {
//     console.log(err);
// });

// ToDo.findOne({
//     _id : id
// }).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// if (!ObjectId.isValid(id)){
//     console.log("ID not valid");
// }

// ToDo.findById(id).then((todo) => {
//     if (!todo){
//         console.log("Id not found");
//     }else{
//         console.log(todo);
//     }
// }).catch((err) => {
//     console.log(err);
// });

if (ObjectId.isValid(userId)){
    User.findById(userId).then((user) => {
        if (!user){
            console.log('id not found');
        }else{
            console.log(user);
        }
    }).catch((err) => {
        console.log(err);
    });
}else{
    console.log("Invalid id");
}