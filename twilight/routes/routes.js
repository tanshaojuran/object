/**
 * Created by asus-pc on 2018/3/11.
 */
const  myexpress=require('express');//����express���
const myroutes=myexpress.Router();//ʹ��express��Route��������·�ɵĴ���
const usercontrol=require('./../control/control.js');//����usercontrol.js�ļ�
const ProductListControl=require('./../control/ProductListControl.js');//����ProductListControl.js�ļ�����Ʒ�б�ҳ

//Productlist��Ʒ�б�ҳ��·�ɷ���  start
myroutes.post("/ProListShangPin.do",ProductListControl.ProListShangPin);
//Productlist��Ʒ�б�ҳ��·�ɷ���  end

module .exports=myroutes;




