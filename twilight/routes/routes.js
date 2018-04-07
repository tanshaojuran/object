/**
 * Created by asus-pc on 2018/3/11.
 */
const  myexpress=require('express');//引用express框架
const myroutes=myexpress.Router();//使用express的Route类来进行路由的创建
const usercontrol=require('./../control/control.js');//引用usercontrol.js文件
const ProductListControl=require('./../control/ProductListControl.js');//引用ProductListControl.js文件，产品列表页

//Productlist产品列表页的路由发送  start
myroutes.post("/ProListShangPin.do",ProductListControl.ProListShangPin);
//Productlist产品列表页的路由发送  end

module .exports=myroutes;




