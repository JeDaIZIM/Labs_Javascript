const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use("/js", express.static("js"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/index", function (req, res){
     // console.log(req.body);
     if(!req.body) return res.sendStatus(400);

     const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
     mongoClient.connect(function(err, client){

          const db = client.db('users_db');
          const collection = db.collection('main_info');
          collection.insertOne(req.body, function(err, result) {
            if (err){
              console.log(err);
            }
            res.status(200).send(req.body);
            console.log(req.body);
            client.close();
          });
      });

     // res.json(req.body);
});


app.listen(3000, function(){
  console.log("Server has been started at port 3000!")
});