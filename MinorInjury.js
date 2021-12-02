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
    let Date = req.body.date;
    let Time = req.body.time;
    let Name = req.body.name;
    let Location = req.body.location;
    let Treatment = req.body.treatment;
    let how = req.body.how;
    let facility = req.body.fLocal;
    let staffName = req.body.StaffName;

    let sql = `INSERT INTO Minor_Injury_Log(Date,Time,Name,Location,Treatment,how,facility,staffName)  VALUES ('${Date}','${Time}','${Name}','${Location}','${Treatment}','${how}','${facility}','${staffName}')`;
    con.query(sql);


})


app.post('/insertNewRow',function(req,res){
    res.render('insertMinor');
})

app.post('/deleteThis',function(req,res){
    let id = req.body.id;
    let sql = `delete from FormV2 where FormId = ${id}`;
    con.query(sql,function(err2,result,fields) {
        res.writeHead(301,{location:'/minorInjDb'});
        console.log("Deleted Form From Db");

    });


})



app.post('/insertRow4e',function(req,res){
    let Date = req.body.date;
    let Time = req.body.time;
    let Name = req.body.name;
    let Location = req.body.loacation;
    let Treatment = req.body.treatment;
    let how = req.body.how;
    let facility = req.body.fLocal;
    let staffName = req.body.StaffName;

    let sql = `INSERT INTO Minor_Injury_Log(Date,Time,Name,Location,Treatment,how,facility,staffName)  VALUES ('${date}', '${time}', '${name}, '${location}', '${treatment}', '${how}', '${fLocal}', '${StaffName}')`;
    con.query(sql);


})

app.get('/form4e', function(req,res) {


       // let sql = "select FormId, FormName,UserId,Date,Time,State, FirstName,LastName from FormV2";
       // con.query(sql, function (err2, result, fields) {
         //   if (err2) throw  err2;


            res.render('form4e' );
       // });
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
app.get('/form4', function(req,res) {
    res.render('Form4')
});

app.get('/login', function(req,res) {
    res.render('project')
});
app.get('/form2', function(req, res){
    res.render('Form2')
});



app.get('/minorInjDb', function(req,res) {

        let sql = "SELECT `Date`,`Time`,`Name`,`Location`,`Treatment`,`how`,`facility`,`staffName` FROM `Minor_Injury_Log` WHERE 1";
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