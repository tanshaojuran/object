/**
 * Created by asus-pc on 2018/3/12.
 */
const mysql=require('mysql');
module.exports={
    query:function(sql,arr,backnum){
        const myconnect=mysql.createConnection({
            host:'172.16.13.115',
            user:'root',
            password:'root',
            port:'3306',
            database:'twilight'
        });
        //打开连接
        myconnect.connect();
        //数据库操作
        myconnect.query(sql,arr,backnum);
        //关闭连接
        myconnect.end;
    }
}