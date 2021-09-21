const express = require('express');
const MongoConnect = require('./mongo-connect');

const app = express();

const mongoConnect = new MongoConnect();


//catturo l'evento di connessione e posso quindi creare il listener mettere in ascolto il server
mongoConnect.on('dbConnection', () => {
    app.listen(3000,()=> {console.log("server in ascolto sulla porta 3000");})
})


//con l'istanza mongoConnect tramite il metodo connect() sto sollevando l'evento
mongoConnect.connect();