/**
 * Created by asus-pc on 2018/3/12.
 */
const usermodule=require('./../module/module.js')//引用module.js文件
module.exports={
    //发送验证码短信
    sendCode:function(req,res){
        let phone  = req.body.phone; //发送验证码到对应的手机号
        console.log(phone);
        send.Cloud.requestSmsCode({
            mobilePhoneNumber: phone,
            name: 'twilight',
            op: '注册验证码',
            ttl: 10}).
            then(function(){
                //发送成功
                res.send('验证码已经发送')
            },function(err){
                //发送失败
                console.log(err);
                res.send('验证码失败')
            });
    },

    //注册
    reg:function(req,res){
        let phone = req.body.phone;
        let code = req.body.code;
        let pwd =req.body.pwd;
        let username =req.body.username;

        send.Cloud.verifySmsCode(code, phone).then(function(){
           usermodule.reg(username,pwd,phone,function(err,data){
               if(data){
                   console.log('注册成功');
                   res.send("ok");
               }
           })

        },
            function(err){
            res.send('验证码错误')
        });
    },

};

