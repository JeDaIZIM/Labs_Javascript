const cheerio = require('cheerio');
const https = require('https');
const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;

https.get('https://kinokrad.co', function(resp) {
  var data = '';
  resp.on('data', function(chunk) {
    data += chunk;
  });

  resp.on('end', function() {
    fs.writeFile('index.html', data.toString(), function(err){
      if (err){
        console.log(err);
      }
      console.log('Hahaha!')
    });
    var obj=[];
      var $ = cheerio.load(data.toString());
      var len = $(".postertitle h2 a").length;
      for (let i=0; i<len; i++){
          obj.push({"name": $(".postertitle h2 a").eq(i).text(),
        "description": $(".shorttext").eq(i).text()});
      }
      const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
      mongoClient.connect(function(err, client){

          const db = client.db('kino');
          const collection = db.collection('films');
          collection.insertMany(obj, function(err, result) {
            if (err){
              console.log(err);
            }
            console.log(result.ops);
            client.close();
          });
      });
    });
}).on("error", function(err) {
  console.log("Error: " + err.message);
});
