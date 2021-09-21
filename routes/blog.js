const BlogClass = require('../models/blog-class');

const express = require('express');
const BlogClass = require('../models/blog-class');

const router = express.Router();

const BlogClass = new BlogClass();

router.get('/articoli', async (req,res) => {

    const articoli = await BlogClass.getArticoli(5).BlogClass;
    articoli.forEach(articolo => {
        console.log(articolo);
    });

    res.send();
})

module.exports = router;