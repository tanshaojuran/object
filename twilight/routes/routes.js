/**
 * Created by asus-pc on 2018/3/11.
 */
const  myexpress=require('express');//引用express框架
const myroutes=myexpress.Router();//使用express的Route类来进行路由的创建
const usercontrol=require('./../control/control.js');//引用usercontrol.js文件
const ProductListControl=require('./../control/ProductListControl.js');//引用ProductListControl.js文件，产品列表页
const IndexControl = require('./../control/indexControl.js');//引用indexControl文件

myroutes.post('/login.do',usercontrol.userlogin);//登录

myroutes.post('/sendCode.do',usercontrol.sendCode);//发送验证码

myroutes.post('/reg.do',usercontrol.reg);//注册验证

//Productlist产品列表页的路由发送  start
myroutes.post("/ProListShangPin.do",ProductListControl.ProListShangPin);
//Productlist产品列表页的路由发送  end

//index首页的路由发送  start
myroutes.get('/index.html',IndexControl.indexPage);
//index首页的路由发送  end

/*购物车模块*/
myroutes.get('/carlib.do',usercontrol.carlib);
myroutes.get('/carnum.do',usercontrol.carnum);
myroutes.get('/delcar.do',usercontrol.delcar);
/*购物车结束*/

module .exports=myroutes;




