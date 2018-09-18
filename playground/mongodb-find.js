// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    }

    console.log('Connected to the MongoDB Server');
    // const db = client.db('ToDoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5ba0d9b1a182346008ee3130')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));

    // }, (err)=>{
    //     console.log('Unable to fecth todo', err);
    // });

    // const db = client.db('ToDoApp');

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fecth todo', err);
    // });


    const db = client.db('ToDoApp');
    db.collection('Users').find({name: "Jerome"}).count().then((count) =>{

        console.log(`Todos count: ${count}`);
        }, (err) => {
             console.log('Unable to fecth todo', err);
    });

    db.collection('Users').find({name:"Jerome"}).toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2))
    });

    //client.close();
});