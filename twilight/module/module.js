/**
 * Created by asus-pc on 2018/4/3.
 */
const mysql = require("mysql");//引用mysql文件
const sqlpool = require("./sqlpool.js");//引用sqlpool文件
const db = sqlpool.sqlpool();//执行sqlpoll函数
module.exports={
    //Productlist产品列表页的module  start
    ProListSearch:function(callback){
        let sql="select * from product_list where 1=1";
        let arr=[];
        db.connect(sql,arr,callback);

    }
    //Productlist产品列表页的module  end
};