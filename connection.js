const express = require('express');
const router = express.Router();
const app = express();
app.use(express.json())
const port = 8080;

var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'vishal1234',
        database: 'postblog'
    }
});

knex.schema.hasTable('users').then((exists)=>{
    if (!exists) {
        return knex.schema.createTable('users', function (table) {
            table.increments('id').primary();
            table.string('first_name', 100);
            table.string('last_name', 100);
            table.text('email',50);
            table.text('Mobile_no',12)
            table.text('password',50)

        });
    }else{
        console.log('all ready exist!');
    };
});


knex.schema.hasTable('userblog').then((exists) => {
    if (!exists) {
        return knex.schema.createTable('userblog', function (table) {
            table.integer("id").unsigned().references("id").inTable("users");
            table.increments("blog_id").primary();
            table.text("email",50);
            table.string('description', 100);
            table.string('user_blog',100);
        });
    } else {
        console.log('all ready exist!');
    };
});



app.use('/', login = express.Router());
require('./loginid')(login, knex);

app.use('/', login = express.Router());
require('./signup')(login, knex);

app.use('/', login = express.Router());
require('./post')(login, knex);

app.use('/', login = express.Router());
require('./get')(login, knex);

app.use('/', login = express.Router());
require('./delete')(login, knex);


app.use('/', login = express.Router());
require('./update')(login, knex);


app.listen(port, () => {
    console.log(`your port is working ${port}`)
});

 