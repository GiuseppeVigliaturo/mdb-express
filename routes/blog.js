const BlogClass = require('../models/blog-class');
const express = require('express');

const router = express.Router();

const blogClass = new BlogClass();

router.get('/articoli', async (req,res) => {

    const articoli = await blogClass.getArticoli(5).BlogClass;
    articoli.forEach(articolo => {
        console.log(articolo);
    });

    res.render('articoli',{articoli});
})

module.exports = router;