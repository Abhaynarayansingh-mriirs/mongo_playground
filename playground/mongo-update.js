const {MongoClient,ObjectID}= require('mongodb');
var url = 'mongodb://localhost:27017/TodoApp';
MongoClient.connect(url,(err,client)=>{
    var db= client.db('Todos')
    if (err) {
    return console.log('connection not established')
}
db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5c891229464b5ba69b785211')
},{
    $set: {
        completed: true
    }
},{
    returnOriginal: false
}).then((p)=>{
console.log(p);
})
});





