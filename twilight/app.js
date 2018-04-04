/**
 * Created by asus-pc on 2018/3/12.
 */
const express = require('express');//引用express框架
const logger = require("morgan");//引用日志文件
const cookie_parser=require('cookie-parser');//引用cookie文件
const body_parser=require('body-parser');//把提交的数据封装到require.body里面
const myejs=require('ejs');//引用ejs
const mysession=require('express-session');//session的配置
const userRouter=require('./routes/routes.js');//引用routes.js文件
const ejsRouter=require('./routes/ejsroutes.js');//引用ejsroutes.js文件


//执行express中的全局函数，返回一个express的服务器对象
const myapp =express();

myapp.use(logger('dev'));//日志模块
myapp.use(body_parser.urlencoded({extended:false}));//编码解析
myapp.use(mysession({//session的设置
    name:"testapp",
    secret:"1234",
    cookies:{maxAge:10000},
    rolling:true,
    resave:true
}));
myapp.use(cookie_parser());//cookie设置
myapp.set("views",__dirname+"/view");//配置ejs模板所在路径
myapp.engine("html",myejs.__express);
myapp.set("view engine","html");//配置ejs渲染的引擎
myapp.use(userRouter);//使用userRouter路由
myapp.use(ejsRouter);//使用ejsRouter路由
myapp.use(express.static(__dirname + '/public'));//静态文件的路径配置

myapp.listen(8800,function(){
    console.log('twilight服务器启动');
});