const utils = require('./Utils');
const _ = require('lodash');

const getAllBooksDetails = ()=>{

    return utils.getBooksDetails()
    .then(bookInfo=>{
        if(!bookInfo) return { count:0,data:[]};
        bookInfo =  JSON.parse(JSON.stringify(bookInfo))
        return {
            count: bookInfo.length,
            data: bookInfo
        }
    })
    .catch(err=>{
        console.log("error",err);
        throw err;
    })

}

const addBookInfoToDatabase = (req)=>{
    console.log('req',req.body)
    let data = JSON.parse(JSON.stringify(req.body))
    // return utils.bookInfoValidation(data)
    // .then(()=>{
    return utils.addbookDetails(req)
    .then(data=>{
        return data;
    })
    .catch(err=>{
        console.log("error",err);
        throw err;
    })

}

const getbookDetailswithId = (req)=>{
    // return utils.getBookWithId(req);
    return utils.getBookWithId(req)
    .then((res)=>{
       return res;
    })
    .catch(err=>{
        console.log("error",err);
        throw err;
    })

}
const updatebookDetailswithId = (req)=>{

    return utils.updateBookwithId(req)
    .then((res)=>{
       return res;
    })
    .catch(err=>{
        console.log("error",err);
        throw err;
    })
}
const deletbookDetailswithId = (req)=>{
    return utils.deleteBookWithId(req)
    .then((res)=>{
       return res;
    })
    .catch(err=>{
        console.log("error",err);
        throw err;
    })
}



module.exports = {
    getAllBooksDetails,
    addBookInfoToDatabase,
    deletbookDetailswithId,
    getbookDetailswithId,
    updatebookDetailswithId
}