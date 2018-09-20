// start MongoDB-Server in CMD
// C:\Program Files\MongoDB\Server\4.0\bin>mongod.exe --dbPath C:\Users\jerom\mongo-data

// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }

    console.log('Connected to the MongoDB Server');
    const db = client.db('ToDoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false

    // }, (err, result)=>{
    //     if(err){
    //         return console.log('Unable to insert ToDo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });



    // db.collection('Users').insertOne({
    //     name: 'Jerome',
    //     age: 24
    // }, (err, result)=>{
    //     if(err){
    //         return console.log('Unable to create User', err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    // });

    client.close();
});