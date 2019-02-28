var express = require('express');
var Book = require('../models/books');
var router = express.Router();
const booksController = require('./../controller/books/book');

// to get all books'
router.get('/', (req, res) => {
    // .get((req, res)=>{
    return booksController.getAllBooksDetails()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.send(err);
        })
})

router.post('/', (req, res) => {
    // .post((req,res)=>{
    return booksController.addBookInfoToDatabase(req)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.send(err);
        })
});


router.get('/:id', function (req, res) {
    console.log('getting one book');
    return booksController.getbookDetailswithId(req)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.send(err);
        })

});

router.put('/:id', function (req, res) {
    return booksController.updatebookDetailswithId(req)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.send(err);
        })
});

router.delete('/:id', function (req, res) {
    return booksController.deletbookDetailswithId(req)
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.send(err);
        })
});

module.exports = router;