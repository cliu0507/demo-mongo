const MongoClient = require('mongodb').MongoClient;

const test = require('assert');

// Connection url

const url = 'mongodb://localhost:27017';

// Database Name

const dbName = 'my_project_db';
// Connect using MongoClient

function example(cl) {
    console.log('Blah blah blah blah extra-blah');
    cl.find({"name" : "new"}).toArray(function(err,result){
        if (err)
         throw err;
        console.log(result)
    })
}

MongoClient.connect(url, function(err, client) {

    // Use the admin database for the operation

    const adminDb = client.db(dbName).admin();
    // List all the available databases

    const Db = client.db(dbName)
    Db.collection('movie', function(err,cl){
        let temp = cl;
        var string = 'abc'
        setTimeout(function() {
            console.log(string)
            console.log('Blah blah blah blah extra-blah');
            console.log(cl);
            cl.find({"name" : "new"}).toArray(function(err,result){
                if (err)
                 throw err;
                console.log(result)
            })
        }, 3000, temp, string);
        cl.find({"name" : "new"}).toArray(function(err,result){
            if (err)
             throw err;
            console.log(result)
        })
    })

    adminDb.listDatabases(function(err, dbs) {

    test.equal(null, err);

    test.ok(dbs.databases.length > 0);
    console.log(dbs.databases)
    
    setTimeout(function() {
        console.log('waiting to close the connection')
        client.close();
    },8000)

    });

});