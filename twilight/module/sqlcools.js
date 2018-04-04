/**
 * Created by asus-pc on 2018/3/12.
 */
module.exports.sqlpool=function(){
    let pool={
        config:{
            host:'172.16.13.115',
            user:'root',
            password:'root',
            port:'3306',
            database:'twilight'
        },
        connect:function(sql,arr,fn){
            const pool=mysql.createPool(this.config);
            pool.getConnection(function(err,connect){
                if(err){
                    console.log(err)
                }else{
                    connect.query(sql,arr,fn);
                }
            })
        }
    }
}

