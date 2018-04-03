/**
 * Created by asus-pc on 2018/3/12.
 */
const mysql=require('mysql');
module.exports={
    query:function(sql,arr,backnum){
        const myconnect=mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'root',
            port:'3306',
            database:''
        });
        //打开连接
        myconnect.connect();
        //数据库操作
        myconnect.query(sql,arr,backnum);
        //关闭连接
        myconnect.end;
    }
}