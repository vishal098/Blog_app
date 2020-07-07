const jwt = require('jsonwebtoken')
module.exports = function (router, knex) {

    login .get('/', (req, res) => {
        res.send("<h2>welcome to my page</h2>")
    })  

    login.get('/details', (req, res) => {
        (knex.select('*').from('users'))
            .then((result) => {
                res.send(result)
            })

    })

    login.get('/detail', (req, res) => {
        let decode = jwt.verify(req.headers.authorization,'modi')
        knex.select('*').from('users').where("email",decode.email)
            .then((result) => {
                res.send(result)
            })

    })

    login.get('/userdetail/:id', (req, res) => {
        knex.select('*').from('users').where('id', req.params.id)
            .then((result) => {
                if (result.length > 0) {
                    res.send(result)
                } else {
                    res.send('no data')
                }
            }).catch((err) => {
                console.log(err)
            })
    })



    login.get('/userblog/:id', (req, res) => {
        knex.select('*').from('userblog').where('id', req.params.id)
            .then((result) => {
                res.send(result)
            })

    })


    login.get('/userblog', (req, res) => {
        let decode = jwt.verify(req.headers.authorization,'modi')
        knex.select('*').from('userblog').where('email', decode.email)
            .then((result) => {
                res.send(result)
            })

    })

    login.get('/user/blog_id/:blogid', (req, res) => {
        knex.select('*').from('userblog').where('blog_id', req.params.blogid)
            .then((result) => {
                res.send(result)
            })

    })

};