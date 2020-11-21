var express = require('express');
var router = express.Router();
const converter = require('../lib/numbersToLettersConverter').numberLetterWordCheck

router.get('/:number',(req,res) =>{
    setTimeout(() => {
        res.send(converter(req.params.number))
    }, 500)
})

module.exports = router;