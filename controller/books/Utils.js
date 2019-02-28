var Book = require('./../../models/books');
const _ = require('lodash');

const getBooksDetails = () => {
    console.log('getBooksDetails')
    return new Promise((resolve, reject) => {
        Book.find({}).exec(function (err, books) {
            if (err) {
                reject('Error occured');
            } else {
                console.log(books);
                resolve(books);
            }
        });
    })
}

const addbookDetails = (req) => {

    var newBook = new Book();
    newBook.title = req.body.title;
    newBook.author = req.body.author;
    newBook.price = req.body.price;
    newBook.email = req.body.email;

    console.log(newBook)
    return new Promise((resolve, reject) => {
        newBook.save(function (err, book) {
            if (err) {
                console.log('err',err)
                reject({error:'error saving book'});
            } else {
                console.log(book);
                resolve(book);
            }
        });
    })
}

const bookInfoValidation = (req) => {

    return new Promise((resolve, reject) => {
        // if (_.get(req, ['title'])) reject(new Error('Book title required'));
        // if (_.get(req, ['author'])) reject(new Error('Book author required'));
        // if (_.get(req, ['prrice'])) reject(new Error('Book price required'));
        // if (_.get(req, ['email'])) reject(new Error('author email required'));
        // if (_.get(req, ['address', 'addressLine1'])) reject(new Error('author addresLine1 required'));
        // if (_.get(req, ['address', 'addressLine2'])) reject(new Error('author addresLine2 required'));
        // if (_.get(req, ['address', 'pincode'])) reject(new Error('author pincode required'));
        resolve();
    })
}

const getBookWithId = (req) => {
    return new Promise((resolve, reject) => {
        Book.findOne({
            _id: req.params.id
        }).exec(function (err, book) {
            if (err) {
                reject({error:'Book Not found'});
            } else {
                console.log(book);
                book = _.isEmpty(book)? {book:"Not Found"} : book;
                resolve(book);
            }
        });
    });
}

const updateBookwithId = (req) => {

    let update_data = {};
    if (_.get(req, ['body', 'title'])) update_data.title = req.body.title;
    if (_.get(req, ['body', 'author'])) update_data.author = req.body.author;
    if (_.get(req, ['body', 'price'])) update_data.price = req.body.price;
    if (_.get(req, ['body', 'email'])) update_data.email = req.body.email;
    if (_.get(req, ['body', 'address'])) update_data.address = req.body.address;


    return new Promise((resolve, reject) => {
        Book.findOneAndUpdate({
            _id: req.params.id
        }, {
                $set: update_data
            }, {
                upsert: true
            }, function (err, newBook) {
                if (err) {
                    reject({error:'Book Not found'});
                } else {
                    console.log(newBook);
                    // newBook = _.isEmpty(newBook)? {newBook:"Not Found"} : newBook;
                    resolve(newBook);
                }
            });
    })
}

const deleteBookWithId = (req) => {
    return new Promise((resolve, reject) => {
        Book.findByIdAndRemove({
            _id: req.params.id
        }, function (err, book) {
            if (err) {
                reject({error:'Book Not found'});
            } else {
                console.log(book);
                book = _.isEmpty(book)? {book:"Not Found"} : book;
                resolve(book);
            }
        });
    })
}
module.exports = {
    getBooksDetails,
    addbookDetails,
    bookInfoValidation,
    getBookWithId,
    deleteBookWithId,
    updateBookwithId
}