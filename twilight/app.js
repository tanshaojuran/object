/**
 * Created by asus-pc on 2018/3/12.
 */
const express = require('express');
const myapp = express();
const myejs=require('ejs');
const userRouter=require('./routes/routes.js');
const mysession=require('express-session');
const cookie_parser=require('cookie-parser');
const body_parser=require('body-parser');

//myapp.use(logger('dev'));//日志模块

myapp.use(body_parser.urlencoded({extended:false}));
myapp.use(mysession({
    name:"testapp",
    secret:"1234",
    cookies:{maxAge:10000},
    rolling:true,
    resave:true
}));
myapp.use(cookie_parser());

myapp.set("views",__dirname+"/view");
myapp.engine("html",myejs.__express);
myapp.set("view engine","html");
myapp.use(userRouter);
myapp.use(express.static(__dirname + '/public'));
myapp.listen(8800,function(){
    console.log('请求响应');
})