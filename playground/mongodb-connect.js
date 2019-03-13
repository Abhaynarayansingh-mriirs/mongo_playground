const {MongoClient, ObjectID}= require('mongodb');
var url= 'mongodb://localhost:27017/TodoApp';
mongoClient.connect(url,(err, client)=>{
const db = client.db('TodoApp')
db.collection('Todos').insertOne(
  {
    text: 'something to do',
    completed: false
  },(err,result)=>{
    if(err){
          return console.log('cnot insert todo',err);
    }
    console.log(JSON.stringify(result.ops, undefined,2))
  });
  db.collection('Todos').insertOne(
    {
      product: 'coconut',
      date: '12/14/18'
        }
  )
  client.close();
});
