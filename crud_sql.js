const http = require('http');
var mysql = require('mysql');


const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nodeDB"

});


//--------------------Create a database in sql --------------------------------------------

// con.connect(function(err){
//     if(err) throw err;
//     console.log("connected");
//     con.query("create database nodeDB",function(err,result){
//         if(err) throw err;
//         console.log("Database created successfully");
//     })
// })


//--------------------Create a table --------------------------------------------


// con.connect(function(err){
//     if(err) throw err;
//     console.log("connected");
//     var sql = "create table customer (name varchar(50) , address varchar(50))";
//     con.query(sql,function(err,result){
//         if(err) throw err;
//         console.log("Customer table created successfully");
//     })
// })


//--------------------Alter a table --------------------------------------------
// con.connect(function(err){
//     if(err) throw err;
//     console.log("connected");
//     var sql = "alter table customer add column id int primary key auto_increment";
//     con.query(sql,function(err,result){
//         if(err) throw err;
//         console.log("Customer table created successfully");
//     })
// })

//--------------------Insert into a table --------------------------------------------

con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    var sql = "insert into customer (name ,address) values ?";
    var values = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
    ];
    con.query(sql,[values],function(err,result){
        if(err) throw err;
        console.log("Number of records inserted : " + result.affectedRows );
    })
})