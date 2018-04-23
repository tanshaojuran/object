/**
 * Created by asus-pc on 2018/3/12.
 */
const usermodule=require('./../module/module.js')//引用module.js文件
module.exports={
	//登录验证
    userlogin:function(req,res){
        let user=req.body.username;
        let pwd =req.body.password;
        usermodule.userlogin(user,pwd,function(err,data){
            //console.log(data[0]);
            if(data.length==0){
                res.send('login.html')
            }else{
                req.session.a=data[0];
                console.log(req.session.a)
                //res.redirect('index.html');
                res.send('index.html');
            }
        })
    },
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
		//购物车列表
    carlib:function(req,res){
        usermodule.carlib(function(err,data){
            //console.log(data);
            res.send(data);
        })
    },

    //购物车产品数量加减
    carnum:function(req,res){
        let a= req.query.carnum;
        let b= req.query.carid;
        usermodule.carnum(a,b,function(err,data){
            if(data){
                res.send('ok');
            }else{
                res.send('faile');
            }
        })
    },

    //购物车产品删除
    delcar:function(req,res){
        let b= req.query.id;
        //console.log(b);
        usermodule.delcar(b,function(err,data){
            if(data){
                res.send('ok');
            }else{
                res.send('faile');
            }
        })
    }


};

