const {MongoClient,ObjectID} = require('mongodb');
var url='mongodb://localhost:27017/TodoApp';
MongoClient.connect(url,(err,client)=>{
    const db = client.db('TodoApp')
if(err){
    return console.log('cannot connect to mongo server');
}
//db.collection('Todos').deleteMany({text: 'something to do'}).then((result)=>{
//console.log(result);
//});

// db.collection('Todos').findOneAndDelete({text: 'open lock'}).then((result)=>{
//     console.log(result);
// })

db.collection('Todos').deleteOne({product: 'coconut'}).then((result)=>{
    console.log(result);
})
});
