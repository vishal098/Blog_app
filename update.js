const jwt = require('jsonwebtoken')
module.exports = function (router, knex) {



    
    login.put('/update', (req, res) => {
        let decode = jwt.verify(req.headers.authorization,'modi')
        console.log(decode.email)
        let user = {

            "Mobile_no": req.body.Mobile_no
        }
        knex('users').where('email',decode.email)
            .update(user).then((result) => {
                res.send("updated succesfully")
            })
            .catch((err) => { console.log(err) })
    })





    login.put('/updateblog/:blogid', (req, res) => {
        const user = {
			"description": req.body.description,
			"user_blog": req.body.user_blog
		}
        let decode = jwt.verify(req.headers.authorization,'modi')
        // console.log(decode);
        knex.select('*').from('userblog').where('blog_id', req.params.blogid)
            .then((result) => {
                for(i of result){
                    // console.log(i.email)
                    if(i.email == decode.email){
                        
                        knex('userblog')
                        .where('blog_id', req.params.blogid).update({'description' : user.description,'user_blog' : user.user_blog})
                        .then((result) => {
                            console.log(123)
                            res.send("updated succesfully")
                            
                            })
                        .catch((err) => { console.log(err) 
                    })
                }
            }
        })
        .catch((err) => { console.log(err) 
    })  
    })
}