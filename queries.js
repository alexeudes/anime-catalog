const pg = require('pg')
const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'animeDB',
    password: 'postgres',
    port: 5432,
})

// pool.query('SELECT NOW()', (err,res) => {
//     console.log(err,res);
//     pool.end();
// })

/*----- Estúdio -----*/ 
const getEstudios = (request, response) => {
    pool.query('SELECT * FROM "estudio"', (error, results) => {
        if (error) {
            response.json({"message": "Ocorreu um erro de autenticação"});
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getEstudios
}