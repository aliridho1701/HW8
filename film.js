const express = require('express');
const router =express.Router();
const pool = require('./config/config')

router.get ('/', function (req, res){
    const query = SELECT * `category. * FROM film`
    pool.query(query, (err, result)=>{
        if (err){
            throw err;
        }
        res.status(200).json(result.rows);
    })
})

router.get ('./filmId', function(req, res){
    const categoryId = req.params.filmId;
    const query = `
        SELECT film.* FROM film WHERE film_category.category_id = $1`
    pool.query(query,[categoryId], (err, result)=>{
        if (err) {
            throw err;
        }else{
            if (result.rows.length ===0){
                return res.status(404).send('No film');
            }else {
                res.status(200).json(result.rows);
            }
        }
    })
});

module.exports = router;