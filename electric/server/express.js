//----------------------------------------express 실행
const express = require('express');
const app = express();
const port = process.env.port||2007;
//------------------------------------------mysql 연결
const mysql = require('mysql');
const {mysqlKey} = require('./mysqlKey.js');
const connection = mysql.createConnection(mysqlKey);
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
app.listen(port, ()=>{console.log(`server run in ${port}`)});
//------------------------------------------파일 임포트
