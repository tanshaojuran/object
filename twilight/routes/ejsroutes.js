/**
 * Created by asus-pc on 2018/3/15.
 */
const  myexpress=require('express');
const myroutes=myexpress.Router();
const ejscontrol=require("./../control/ejscontrol.js");

/*���巽��*/

myroutes.get('/index.ejs',ejscontrol.indexlist);

//��¶

module.exports=myroutes;
