var {MongoClient, ObjectID}= require('mongodb');

 
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client)=>{
    const db = client.db('TodoApp')
if(err){
    return console.log('can not connect to mongodb');
}
console.log('connected to server');
db.collection('Todos').find().toArray().then((docs)=>{
console.log('Todos');
console.log(JSON.stringify(docs,undefined,2)),(err)=>
{
    console.log('can not fetch Todo',err)
};
});
})