/**
 * Created by asus-pc on 2018/3/12.
 */
const usermodule=require('./../module/module.js')//����module.js�ļ�
module.exports={
	//��¼��֤
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
    //������֤�����
    sendCode:function(req,res){
        let phone  = req.body.phone; //������֤�뵽��Ӧ���ֻ���
        console.log(phone);
        send.Cloud.requestSmsCode({
            mobilePhoneNumber: phone,
            name: 'twilight',
            op: 'ע����֤��',
            ttl: 10}).
            then(function(){
                //���ͳɹ�
                res.send('��֤���Ѿ�����')
            },function(err){
                //����ʧ��
                console.log(err);
                res.send('��֤��ʧ��')
            });
    },

    //ע��
    reg:function(req,res){
        let phone = req.body.phone;
        let code = req.body.code;
        let pwd =req.body.pwd;
        let username =req.body.username;

        send.Cloud.verifySmsCode(code, phone).then(function(){
           usermodule.reg(username,pwd,phone,function(err,data){
               if(data){
                   console.log('ע��ɹ�');
                   res.send("ok");
               }
           })

        },
            function(err){
            res.send('��֤�����')
        });
    },
		//���ﳵ�б�
    carlib:function(req,res){
        usermodule.carlib(function(err,data){
            //console.log(data);
            res.send(data);
        })
    },

    //���ﳵ��Ʒ�����Ӽ�
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

    //���ﳵ��Ʒɾ��
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

