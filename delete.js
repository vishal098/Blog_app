const jwt = require('jsonwebtoken')
module.exports = function (router, knex) {


    login.delete('/delete/admin/:id', (req, res) => {
        let decode = jwt.verify(req.headers.authorization,'modi')
        if(decode == 'ankur19@navgurukul.org'){
            knex('users')
                .where('id', req.params.id).del()
                .then((result) => {
                    res.send("deleted succesfully")
                }
            )
            .catch((err) => { console.log(err) })
        }
    })


    login.delete('/delete/blog/admin/:blogid', (req, res) => {
        let decode = jwt.verify(req.headers.authorization,'modi')
        console.log(decode);
        

        if(decode == 'ankur19@navgurukul.org'){

        
            knex('userblog')
                .where('blog_id', req.params.blogid).del()
                .then((result) => {
                    res.send("deleted succesfully")

                })
                .catch((err) => { console.log(err) })
        
        }else{
            res.send('you are not admin')
        }
    })

    login.delete('/delete', (req, res) => {
        let decode = jwt.verify(req.headers.authorization,'modi')
        // console.log(decode)
        knex('users')
            .where('email',decode).del()
            .then((result) => {
                res.send("deleted succesfully")

            })
            .catch((err) => { console.log(err) })
        
    })


    // login.delete('/delete/blog/:blogid', (req, res) => {
    //     let decode = jwt.verify(req.headers.authorization,'modi')
    //     console.log(decode);
        // knex('userblog')
        //     .where('blog_id', req.params.blogid).del()
        //     .then((result) => {
        //         res.send("deleted succesfully")

        //     })
        //     .catch((err) => { console.log(err) })
    // })

    login.delete('/delete/blog/:blogid', (req, res) => {
        let decode = jwt.verify(req.headers.authorization,'modi')
        // console.log(decode);
        knex.select('*').from('userblog').where('blog_id', req.params.blogid)
            .then((result) => {
                for(i of result){
                    if(i.email == decode){
                        knex('userblog')
                        .where('blog_id', req.params.blogid).del()
                        .then((result) => {
                            res.send("deleted succesfully")
            
                        })
                        .catch((err) => { console.log(err) 
                    })
                }
            }
        })
        .catch((err) => { console.log(err) })
    })
};