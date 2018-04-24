/**
 * Created by asus-pc on 2018/4/3.
 */
const mysql = require("mysql");//引用mysql文件
const sqlpool = require("./sqlpool.js");//引用sqlpool文件
const db = sqlpool.sqlpool();//执行sqlpoll函数
module.exports={
userlogin:function(user,pwd,backnum){
        let sql='select * from user_list where user_tel= ? and user_pwd= ?';
        db.connect(sql,[user,pwd],backnum);
        //console.log(sql);
    },
    reg:function(username,pwd,phone,backnum){
        let sql='insert into user_list(user_name,user_pwd,user_tel) values(?,?,?)';
        db.connect(sql, [username,pwd,phone],backnum);
    },
    carlib:function(backnum){
        let sql='select * from user_shoppingCar';
        db.connect(sql, '',backnum);
    },
    carnum:function(a,b,backnum){
        let sql='update  user_shoppingcar set car_num=? where car_id=?';
        db.connect(sql, [a,b],backnum);
    },
    delcar:function(b,backnum){
        let sql='delete from user_shoppingcar where car_id=?';
        db.connect(sql, [b],backnum);
    }
};