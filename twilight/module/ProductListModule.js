/**
 * Created by 杨玉梅 on 2018/4/7.
 * Productlist产品列表页的module  start
 */
const mysql = require("mysql");//引用mysql文件
const sqlpool = require("./sqlpool.js");//引用sqlpool文件
const db = sqlpool.sqlpool();//执行sqlpoll函数
module.exports={
    ProListSearch:function(ProListClassName,ProListPrice,callback){
        ProListPrice=ProListPrice.split(",");
        let sql="select good_id as GoodID,good_name as name,shop_price as price,good_img as FaceImg " +
            "from product_list A JOIN product_class B " +
            "ON A.class_id=B.class_id where 1=1 " +
            "and shop_price BETWEEN "+ProListPrice[0]+" AND "+ProListPrice[1];
        let arr=[];
        if(ProListClassName.length!=0 && ProListClassName!="全部"){
            sql+=" and class_name = ?";
            arr.push(ProListClassName);
        }
        db.connect(sql,arr,callback);
    }
};