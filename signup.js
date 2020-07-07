module.exports = function (router, knex) {
   router.post('/sign_up', (req, res) => {


      var user = {
         "first_name": req.body.first_name,
         "last_name": req.body.last_name,
         "email": req.body.email,
         "password": req.body.password,
         "Mobile_no": req.body.Mobile_no
      }

   knex('users')
      .insert(user).then((results) => {
         console.log(results)
         if (results) {
            res.send('succesfully')

         } else {
            res.send('Unsuccesfully!');
         }
      })
      .catch((err) => { console.log(err); })
   });

   // router.post('/sign_up', (req, res) => {


   //    var user = {
   //       "first_name": req.body.first_name,
   //       "last_name": req.body.last_name,
   //       "email": req.body.email,
   //       "password": req.body.password,
   //       "Mobile_no": req.body.Mobile_no
   //    }
   //       (knex.select('*').from('users')).where("email")
   //       .then((result) => {
   //          for (i of result) {
   //             if (i == user.email) {
   //                res.send("it's already added");
   //             } else {
   //                knex('users')
   //                   .insert(user).then((results) => {
   //                      console.log(results)
   //                      if (results) {
   //                         res.send('succesfully')

   //                      } else {
   //                         res.send('Unsuccesfully!');
   //                      }
   //                   })
   //                   .catch((err) => { console.log(err); })
   //             }
   //          }
   //       })
   // });
};

