/**
 * Created by asus-pc on 2018/3/12.
 */
const mysql = require("mysql");//����mysql�ļ�
module.exports.sqlpool=function(){
    let pool={
        config:{
            //�������ݿ�
            //host:'172.16.13.115',
            //user:'root',
            //password:'root',
            //port:'3306',
            //database:'twilight'

            //�����������ݿ�
            host:"localhost",
            user:"root",
            password:"root",
            port:3306,
            database:"twilight"
        },
        connect:function(sql,arr,fn){
            //1.����һ�����ӳض���
            const pool=mysql.createPool(this.config);
            //2.��ȡ���Ӷ���
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