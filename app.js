const express = require('express');
const MongoConnect = require('./mongo-connect');
const routerBlog = require('./routes/blog');

const app = express();
app.set('view engine','ejs');
app.use('/blog', routerBlog);

const mongoConnect = new MongoConnect();


//catturo l'evento di connessione e posso quindi creare il listener mettere in ascolto il server
mongoConnect.on('dbConnection', () => {
    app.listen(3000)
})


//con l'istanza mongoConnect tramite il metodo connect() sto sollevando l'evento
mongoConnect.connect();