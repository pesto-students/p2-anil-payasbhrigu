
const { MongoClient, ServerApiVersion } = require('mongodb');
const creds = require('./static/credentials')
const uri = `mongodb+srv://payasbhrigu:${creds.password}@cluster0.q8duk.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function fetchData(){

    try{
        await client.connect()
    
        await listDatabases(client)
    } catch(e){
        console.log(e);
    } finally {
        await client.close()
    }
}

async function listDatabases(client) {
    dbList = await client.db().admin().listDatabases();
    console.log("Databases:");
    dbList.databases.forEach(db => {
        console.log(` - ${db.name}`);
    });
}

// const cursor = client.db("sentAnalysis").admin()
// cursor.listDatabases((err,db) => {
//     // Printing the databases
//     if(!err) console.log("db: ",db);
//     })
// collection = cursor.collection("sentiments")
// return collection

module.exports = fetchData

