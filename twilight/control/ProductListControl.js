/**
 * Created by 杨玉梅 on 2018/4/7.
 * Productlist产品列表页的路由
 */
const usermodule=require('./../module/ProductListModule.js')//引用ProductListModule.js文件
module.exports={
    ProListShangPin:function(req,res){
        let a=req.body.theName;
        console.log(a);
        usermodule.ProListSearch(function(err,data){
            console.log(data);
            res.send(data);
        });
    }
};

