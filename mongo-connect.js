const { EventEmitter } = require('events');
const { MongoClient } = require('mongodb');

class MongoConnect extends EventEmitter {

    constructor() {
        super();
        this.mongoClient = new MongoClient('mia stringa di connessione a MongoDB Atlas',{ useUnifiedTopology: true });
    }

    connect() {
        this.mongoClient.connect((err,mongodb) => {
            if(err) throw err;
            console.log("Connessione al database avvenuta!");
            //aggiungo una proprietà per riferirm al db blog
            MongoConnect.blogDB = mongodb.db('blog');
            this.emit('dbConnection');
        })
    }

}

module.exports = MongoConnect;
