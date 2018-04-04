/**
 * Created by asus-pc on 2018/3/15.
 */
const  myexpress=require('express');
const myroutes=myexpress.Router();
const ejscontrol=require("./../control/ejscontrol.js");

/*定义方法*/

myroutes.get('/index.ejs',ejscontrol.indexlist);

//暴露

module.exports=myroutes;
