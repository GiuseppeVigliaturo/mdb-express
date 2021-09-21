const MongoConnect = require('../mongo-connect');
const express = require('express');

const router = express.Router();

router.get('/articoli', async (req,res) => {
    //recupero il riferimento alla collezione articoli
    const articoliCollection = MongoConnect.blogDB.collection('articoli');
    const articoli = articoliCollection.find({}).limit(3);

    while (await articoli.hasNext()) {
        console.log(await articoli.next());
    }
})

module.exports = router;