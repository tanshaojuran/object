/**
 * Created by asus-pc on 2018/3/12.
 */
const mysql = require("mysql");//引用mysql文件
module.exports.sqlpool=function(){
    let pool={
        config:{
            //公共数据库
            //host:'172.16.13.115',
            //user:'root',
            //password:'root',
            //port:'3306',
            //database:'twilight'

            //本机测试数据库
            host:"localhost",
            user:"root",
            password:"root",
            port:3306,
            database:"twilight"
        },
        connect:function(sql,arr,fn){
            //1.创建一个连接池对象
            const pool=mysql.createPool(this.config);
            //2.获取连接对象
            pool.getConnection(function(err,connect){
                if(err){
                    console.log(err);
                }else{
                    connect.query(sql,arr,fn)
                }
            });
        }
    };
    return pool;
};