/**
 * Created by asus-pc on 2018/3/12.
 */
const usermodule=require('./../module/module.js')//����module.js�ļ�
module.exports={
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

};

