/**
 * Created by ����÷ on 2018/4/7.
 * Productlist��Ʒ�б�ҳ��module  start
 */
const mysql = require("mysql");//����mysql�ļ�
const sqlpool = require("./sqlpool.js");//����sqlpool�ļ�
const db = sqlpool.sqlpool();//ִ��sqlpoll����
module.exports={
    ProListSearch:function(callback){
        let sql="select good_id as GoodID,good_name as name," +
            "shop_price as price,good_img as FaceImg from product_list where 1=1";
        let arr=[];
        db.connect(sql,arr,callback);
    }
};