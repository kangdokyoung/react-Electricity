import { Request, Response } from "express";
import mysql, { MysqlError } from 'mysql';

const con = mysql.createConnection({
    host     : 'localhost',
  user     : 'root',
  password : 'ajdcjddl12!@#',
  database : 'electricity'
});

type Rows = {date_: Date, preData:number, realData:number}[]

exports.readChart = (req:Request, res: Response) => {
    const { month, type } = req.body;
    if(type == 'lstm'){
        con.query(`SELECT date_, preData, realData FROM ${month}mlstm ORDER BY num`, (error:MysqlError, rows1:Rows)=> {
            if(error) throw error;
            res.send({success : 0, data : rows1})
        })
    }
    else {
        con.query(`SELECT date_, preData, realData FROM ${month}mcnn ORDER BY num`, (error:MysqlError, rows2:Rows)=> {
            if(error) throw error;
            res.send({success : 1, data : rows2})
        })
    }
}