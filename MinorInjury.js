var express = require("express");
var app = express();
app.set('view engine','pug');
let mySql = require('mysql');
let con = mySql.createConnection({
    host:'45.55.136.114',
    user:'team1_F2021',
    password:'SpecialT!me!',
    database:'test'
})
const bodyParser = require("body-parser");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/insertRow',function(req,res){
    let id = req.body.fId;
    let fName = req.body.FormName;
    let date = req.body.d;
    let time = req.body.t;
    let state = req.body.s;
    let userId = req.body.UId;
    let firstName = req.body.firstName;
    let lastName = req.body.lName;

    let sql = `INSERT INTO FormV2(FormId,FormName,Date,Time,State,UserId,FirstName,LastName)  VALUES ('${id}', '${fName}', CURRENT_DATE, '${time}', '${state}', '${userId}', '${firstName}', '${lastName}')`;
    con.query(sql);


})


app.post('/insertNewRow',function(req,res){
    res.render('insert');
})

app.post('/deleteThis',function(req,res){
    let id = req.body.id;
    let sql = `delete from FormV2 where FormId = ${id}`;
    con.query(sql,function(err2,result,fields) {
        res.writeHead(301,{location:'/minorInjDb'});
        console.log("Deleted Form From Db");

    });


})

app.post('/ConfirmDelete', function(req,res) {

    let id = req.body.id;
    console.log(id);
    let sql = `select * from FormV2 where FormId = ${id}`;
    con.query(sql,function(err2,result,fields){
       // console.log(result);
    res.render('deleterow', {
        title:"FormV2",
        Form:result

    })

    })
})

app.post('/insertRow4e',function(req,res){
    let id = req.body.fId;
    let fName = req.body.FormName;
    let date = req.body.d;
    let time = req.body.t;
    let state = req.body.s;
    let userId = req.body.UId;
    let firstName = req.body.firstName;
    let lastName = req.body.lName;

    let sql = `INSERT INTO FormV2(FormId,FormName,Date,Time,State,UserId,FirstName,LastName)  VALUES ('${id}', '${fName}', CURRENT_DATE, '${time}', '${state}', '${userId}', '${firstName}', '${lastName}')`;
    con.query(sql);


})

app.get('/form4e', function(req,res) {
    con.connect(function (err) {
        if (err) throw  err;
        let sql = "select FormId, FormName,UserId,Date,Time,State, FirstName,LastName from FormV2";
        con.query(sql, function (err2, result, fields) {
            if (err2) throw  err2;


            res.render('form4e' );
        });
    });
});

app.get('/form1', function(req,res) {
    res.render('form1')
});

app.get('/form3', function(req,res) {
    res.render('form3')
});

app.get('/home', function(req,res) {
    res.render('index2')
});

app.get('/login', function(req,res) {
    res.render('project')
});



app.get('/minorInjDb', function(req,res) {

        let sql = "select FormId, FormName,UserId,Date,Time,State, FirstName,LastName from FormV2";
        con.query(sql, function (err2, result, fields) {
            if (err2) throw  err2;


            res.render('MinorInjurys', {
                title: "FormV2",
                Form: result
            });
        });

});
let port = 3333;
app.listen(port);