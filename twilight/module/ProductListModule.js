/**
 * Created by ����÷ on 2018/4/7.
 * Productlist��Ʒ�б�ҳ��module  start
 */
const mysql = require("mysql");//����mysql�ļ�
const sqlpool = require("./sqlpool.js");//����sqlpool�ļ�
const db = sqlpool.sqlpool();//ִ��sqlpoll����
module.exports={
    ProListSearch:function(callback){
        let sql="select * from product_list where 1=1";
        let arr=[];
        db.connect(sql,arr,callback);
    }
};