/**
 * Created by ����÷ on 2018/4/7.
 * Productlist��Ʒ�б�ҳ��·��
 */
const usermodule=require('./../module/ProductListModule.js')//����ProductListModule.js�ļ�
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

