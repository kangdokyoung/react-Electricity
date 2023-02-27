import { Request, Response } from "express";
import mysql from 'mysql';

const con = mysql.createConnection({
    host     : 'localhost',
  user     : 'root',
  password : 'ajdcjddl12!@#',
  database : 'electricity'
});

exports.readChart = (req:Request, res: Response) => {
    console.log(req.body);
    const { month, type } = req.body;
    if(type == 'lstm'){
        con.query(`SELECT date_, preData, realData FROM ${month}mlstm ORDER BY num`, (error, rows1, fields)=> {
            if(error) throw error;
            res.send({success : 0, data : rows1})
        })
    }
    else {
        con.query(`SELECT date_, preData, realData FROM ${month}mcnn ORDER BY num`, (error, rows2, fields)=> {
            if(error) throw error;
            res.send({success : 1, data : rows2})
        })
    }
}