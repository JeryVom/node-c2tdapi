// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }
    
    console.log('Connected to the MongoDB Server');
    const db = client.db('ToDoApp');


    
    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5ba3877daf6daad1c0c40932')
    // }, {
    //     $set:{
    //         completed : true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result)
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5ba0db05680bb359586c0063')
    },{
        $set:{
            name: "Jeromeee"
        },

        $inc:{
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result)=>{
        console.log(result)
    });

    //{ $inc: { <field1>: <amount1>, <field2>: <amount2>, ... } }



    

    //client.close();
});