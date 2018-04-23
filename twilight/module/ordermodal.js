/**
 * Created by PC on 2018/4/4.
 */
const mysql = require('mysql');
let config=require('./config')
module.exports={
    addadress:function(peoplename,inputleft,city,xiangxiadress,callback){

        const sql="insert into user_addr (res_name,res_phone,add_city,add_address,user_id)" +
            "values (?,?,?,?,1)"
        config.query(sql,[peoplename,inputleft,city,xiangxiadress],callback)
    },
    xianshi:function(callback){
        const sql="select * from user_addr"
        config.query(sql,null,callback)
    },
    addressdelet:function(uid,callback){
        const sql='delete from user_addr where add_id=?'
        config.query(sql,[uid],callback)
    },
    addresschange:function(addid,callback){
        const sql='select * from user_addr'
        config.query(sql,[addid],callback)
    },
    addresschangesure:function(peoplename,inputleft,city,xiangxiadress,addid,callback){
        const sql='update user_addr set res_name=?,res_phone=?,add_city=?,add_address=? where add_id=?'
        config.query(sql,[peoplename,inputleft,city,xiangxiadress,addid],callback)
    },
    addressmoren2:function(callback){
        const sql=' UPDATE user_addr SET add_isdefault=0 WHERE add_isdefault=1'
        config.query(sql,null,callback)
    },
    addressmoren:function(uid,callback){
        const sql= 'update user_addr set add_isdefault=1 where add_id=?'
        config.query(sql,[uid],callback)
    },
    xianshidingdan:function(callback){
        const sql='select * from user_order'
        config.query(sql,null,callback)
    },
    orderxiangqing:function(callback){
        const sql='select * from user_order JOIN user_addr where add_isaddress=1'
        config.query(sql,null,callback)
    },
    gaibiandizhi2:function(callback){
        const sql='update user_addr set add_isaddress=0 where add_isaddress=1'
        config.query(sql,null,callback)
    },
    gaibiandizhi:function(uid,callback){
        const sql='update user_addr set add_isaddress=1 where add_id=?'
        config.query(sql,[uid],callback)
    },
    xuqiudizhi2:function(callback){
        const sql='update user_addr set add_isaddress=0 where add_isaddress=1'
        config.query(sql,null,callback)
    },
    xuqiudizhi:function(callback){
        const sql='update user_addr set add_isaddress=1 where add_isdefault=1'
        config.query(sql,null,callback)
    }


}