const path = require('path');

const rootDir = require('../util/path')

exports.getinfo = (req,res,next) =>{    
    res.sendFile(path.join(rootDir,'views','contactus.html'));  //basically for handling contactus.html 
}

exports.postinfo = (req,res,next) =>{
    console.log(req.body);
    //console.log(JSON.stringify(req.body)); in this [Object: null prototype] { title: 'book' }
    //we can eliminate [Object: null prototype]
    // we will get only { title: 'book' }
    res.redirect('/success');
}