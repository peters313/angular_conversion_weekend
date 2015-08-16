var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');

var Info = mongoose.model('info', {message: String, flag: Boolean});

router.get('/data', function(req, res, next){
    return Info.find({}).exec(function(err, info){
        //console.log("router.get");
        if(err) throw new Error(err);
        res.send(JSON.stringify(info));
    });
});

router.post('/data', function(req, res, next){
    var info = new Info({message: req.body.message, flag: false});
    info.save(function(err){
        if(err) console.log('meow ', err);
        res.send("yes");
        //next();
    });
});

router.delete('/data', function(req, res, next){
    Info.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err){
            console.log("ERROR!!! : ", err);
        }
        res.json(post);
    });
});

router.get('/*', function(req, res, next){
    var file = req.params[0] || '/assets/views/index.html';
    res.sendFile(path.join(__dirname, '../public/', file));
});



module.exports = router;