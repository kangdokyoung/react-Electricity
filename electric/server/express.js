//----------------------------------------express 실행
const express = require('express');
const app = express();
app.use(express.json())
//------------------------------------------mysql 연결
const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
  user     : 'root',
  password : 'ajdcjddl12!@#',
  database : 'electricity'
});
connection.connect();
//------------------------------------------helmet 페이지 보안
const helmet = require('helmet');
app.use(helmet());
//------------------------------------------cors 허가
const cors = require('cors');
app.use(cors({
    origin : true, credentials: true
}));
//------------------------------------------서버 구동
app.listen(2005, ()=>{console.log(`server run in 2005`)});
//------------------------------------------파일 임포트
const { readChart } = require('./read/readChart.js');

//------------------------------------------create
app.post('/readChart', (req, res)=>{
    readChart(req, res);
})