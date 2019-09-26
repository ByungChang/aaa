const express = require('express');
const router = express.Router();
//const movies = require('../data/movie.json');
const models = require("../models");

// router.post('/form_recive',(req,res)=>{
//     // models.user.findAll({
//     //     where:{
//     //         id:req.user_id,
//     //     }
//     // })
//     // .then( result => {
//     //     res.send(result)
//     // })
//     // .catch( err => {
//     //     console.log(err)
//     // })
//     res.send('asdf');
// })

router.get('/', (req, res, next) => {
    models.user.findAll({
        
    })
    .then( result => {
        res.send(result)
    })
    .catch( err => {
        console.log(err)
    })
    //res.render('form',{name:'kbc'});
});

router.get('/:id', function(req, res){
    const id = parseInt(req.params.id, 10);
    const movie = movies.filter(function(movie){
        return movie.id === id;
    });
    res.send(movie);
});

module.exports = router;

