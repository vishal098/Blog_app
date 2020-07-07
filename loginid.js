const jwt = require('jsonwebtoken')

module.exports = (login, knex) => {
    login.post('/login', function (req, res) {
        (knex.select('*').from('users')).
        then((result) => {
            user_email = true
            user_password = true
            for (i of result ){                
                if (i.email == req.body.emailReq){
                    // console.log(i,req.body.emailReq);
                    user_email=false
                    if (i.password == req.body.passwordReq){
                        user_password=false
                        var token = jwt.sign({"email":req.body.emailReq},'modi')
                        // console.log(token)
                    }
                }
            }
            if (user_email){
                res.status(404).send('invalid email')
            }else if(user_password){
                res.status(404).send('invalid password')
            }else{
                
                res.status(200).json({message:'login successful',"token":token})
            }

        }).catch((err) => {console.log(err)})

    });
    
}

