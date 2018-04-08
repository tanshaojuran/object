/**
 * Created by 杨玉梅 on 2018/4/7.
 * Productlist产品列表页的路由
 */
const usermodule=require('./../module/ProductListModule.js')//引用ProductListModule.js文件
module.exports={
    ProListShangPin:function(req,res){
        let ProListClassName=req.body.className;
        let ProListPrice=req.body.price;
        console.log(ProListPrice);
        usermodule.ProListSearch(ProListClassName,ProListPrice,function(err,data){
            //console.log(data);
            res.send(data);
        });
    }
};

