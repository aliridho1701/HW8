const pool = require('../config/config')
const fs = require('fs');


const query = fs.readFileSync('./db/seeding.sql', {encoding :'utf-8'});
pool.query(seedQuery, (err, res)=> {
    console.log(err)
    console.log('seeding complete')
    pool.end();
});