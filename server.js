'use strict';

var Search =    require('bing.search'),
                MongoClient = require('mongodb').MongoClient,
                express = require('express'),
                app = express(),
                assert = require('assert'),
                db;

const url = process.env.MONGODB_URI;

app.set('strict routing', true);
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.set('json spaces', 4);

MongoClient.connect(url, function(err, mdb) {
    assert.equal(null, err);
    db = mdb;
    console.log("Connected correctly to the DB server");
    
    app.listen( app.get('port'), () => {
        console.log('listening on port: ' + app.get('port'));
    });
});

function insOne(req,res) {
    
    var coll = db.collection('last10query');
    
    coll.insert({ usrQuery: req.params.src, date: new Date() }, (err,data) => {
        assert.equal(err, null);
        assert.equal(1, data.insertedCount);
    });
}

app.get('/api/imagesearch/:src', (req,res)=>{
    
    var search = new Search('HnWXlb5tbVST0WiS8WxJOeXy32AolusGlkumm4WztTk');

    search.images(req.params.src,
      {
          top: +req.query.offset ? +req.query.offset * 10 : 10,
          skip: +req.query.offset ? (+req.query.offset * 10) - 10 : 10
      },
      function(err, results) {
        assert.equal(null, err);
        
        insOne(req,res);
        
        res.setHeader('Content-Type', 'application/json');
        res.send(results);
      }
    );
});

app.get('/api/latest/imagesearch', (req,res) => {
    
    var coll = db.collection('last10query');
    
    coll.find({},{_id: 0, usrQuery: 1, date: 1}).sort({date:-1}).toArray( (err,results) => {
        if(err) throw err;
        
        res.setHeader('Content-Type', 'application/json');
        res.send(results);
    });
});




