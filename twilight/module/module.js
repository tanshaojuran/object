/**
 * Created by asus-pc on 2018/4/3.
 */
const mysql = require("mysql");//����mysql�ļ�
const sqlpool = require("./sqlpool.js");//����sqlpool�ļ�
const db = sqlpool.sqlpool();//ִ��sqlpoll����
module.exports={
    //Productlist��Ʒ�б�ҳ��module  start
    ProListSearch:function(callback){
        let sql="select * from product_list where 1=1";
        let arr=[];
        db.connect(sql,arr,callback);

    }
    //Productlist��Ʒ�б�ҳ��module  end
};