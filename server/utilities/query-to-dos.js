const {mongoose} = require('./../db/mongoose');
const {ToDo} = require('./../models/todo');
const {ObjectId} = require('mongodb');

const todocall = (idToDo) => {
    if (ObjectId.isValid(idToDo)){
        ToDo.findById(idToDo).then((rst) => {
            if (rst){
                return rst;
            }else{
                return 404;
            }
        }).catch((err) => {
            return err;
        });
    }else{
        return 400;
    }
};

module.exports = {
    todocall : todocall
}

