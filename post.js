const jwt = require('jsonwebtoken')
module.exports = function (router, knex) {

	router.post('/postblog', (req, res) => {
		let decode = jwt.verify(req.headers.authorization,'modi')
		// console.log(decode.email);
		
		var user = {
			"id": req.body.id,
			"blog_id": req.body.blog_id,
			"email": req.body.email,
			"description": req.body.description,
			"user_blog": req.body.user_blog
		}
		// console.log(user)
		if(user.email == decode.email){	
			knex('userblog')
				.insert(user).then((result) => {
					// console.log(user)
					if (result) {
						res.send('your blog had added succesfully')

					} else {
						res.send('Unsuccesfully!');
					}
				})
				.catch((err) => { console.log(err);
			})
		}else{
			res.send("Invalid email \n first sign-up if you don't any account")
		}
	})
};

