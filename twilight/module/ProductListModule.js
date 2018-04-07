/**
 * Created by 杨玉梅 on 2018/4/7.
 * Productlist产品列表页的module  start
 */
const mysql = require("mysql");//引用mysql文件
const sqlpool = require("./sqlpool.js");//引用sqlpool文件
const db = sqlpool.sqlpool();//执行sqlpoll函数
module.exports={
    ProListSearch:function(callback){
        let sql="select * from product_list where 1=1";
        let arr=[];
        db.connect(sql,arr,callback);
    }
};