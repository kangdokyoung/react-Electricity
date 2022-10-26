const {mysqlKey}  = require('../mysqlKey');
const mysql = require('mysql');
const con = mysql.createConnection(mysqlKey);

exports.readChart = (req, res) => {
    console.log(req.body);
    const { month, type } = req.body;
    if(type == 'lstm'){
        con.query(`SELECT * FROM lstm${month}m ORDER BY num`, (error, rows1, fields)=> {
            if(error) throw error;
            res.send({success : 0, data : rows1})
        })
    }
    else {
        con.query(`SELECT * FROM ${month}mcnn ORDER BY num`, (error, rows2, fields)=> {
            if(error) throw error;
            res.send({success : 0, data : rows2})
        })
    }
}