const MongoConnect = require('../mongo-connect')

class BlogClass {
    
    getArticoli(numeroArticoli = 10){
         const articoliCollection = MongoConnect.blogDB.collection('articoli');
         //N.B find() ritorna un'istanza della classe cursor e tramite questa istanza iteriamo sui documenti recuperati
         //ma non dobbiamo iterare all'interno del metodo get articoli ma li vogliamo ritornare, usiamo toArray.
         const articoli = articoliCollection.find({}).limit(numeroArticoli).toArray();
         return articoli;
    }
}

module.exports = BlogClass;