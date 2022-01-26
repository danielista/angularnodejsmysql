const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyparser.json());


// database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'simpledb',
    port: 3306
});

// check database connection
db.connect(err => {
    if (err) { console.log(err, 'dberr'); }
    console.log('database connected ...');
})


// get all data
app.get('/habit_tracker', (req, res) => {
    let qr = 'select * from habit_tracker_table';
    db.query(qr, (err, result) => {

        if (err) {
            console.log(err, 'errs');
        }
        if (result.length > 0) {
            res.send({
                message: 'all user data',
                data: result
            })
        }
    })
})


// get single data
app.get('/habit_tracker/:id', (req, res) => {
    let gID = req.params.id;
    let qr = `select * from habit_tracker_table where id = ${gID}`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        if (result.length > 0) {
            res.send({
                message: 'get single data',
                data: result
            });
        } else {
            res.send({
                message: 'data not found'
            });
        }
    })
})

// create data
app.post('/habit_tracker', (req, res) => {
    console.log(req.body, 'createdata');

    let userName = req.body.user;
    let habitName = req.body.habit_name;
    let habit_descriprion = req.body.habit_description;
    let startTIME = req.body.start_time;
    let endTIME = req.body.end_time;
    let habitDONE = req.body.done;

    let qr = `insert into habit_tracker_table(user,habit_name,habit_description,start_time,end_time,done) 
                values('${userName}','${habitName}','${habit_descriprion}','${startTIME}','${endTIME}','${habitDONE}')`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        console.log(result, 'result')
        res.send({
            message: 'data inserted'
        });
    })
});

// update single data
app.put('/habit_tracker/:id', (req, res) => {
    console.log(req.body, 'updatedata');
    let updateID = req.params.id;
    let userName = req.body.user;
    let habitName = req.body.habit_name;
    let habit_description = req.body.habit_description;
    let startTIME = req.body.start_time;
    let endTIME = req.body.end_time;
    let habitDONE = req.body.done;

    let qr = `UPDATE habit_tracker_table SET user = '${userName}',
                habit_name = '${habitName}',
                habit_description = '${habit_description}', 
                start_time = '${startTIME}',
                end_time = '${endTIME}',
                done = '${habitDONE}'
                WHERE id = '${updateID}'`

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({ message: 'data updated' })
    })
})

// delete single data
app.delete('/habit_tracker/:id', (req, res) => {
    let qID = req.params.id;

    let qr = `delete from habit_tracker_table where id = '${qID}'`;
    db.query(qr, (err, result) => {
        if (err) { console.log(err); }

        res.send({ message: 'data deleted' })
    })
})


app.listen(3000, () => {
    console.log('server is running');
})