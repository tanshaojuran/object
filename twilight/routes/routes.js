/**
 * Created by asus-pc on 2018/3/11.
 */
const  myexpress=require('express');//����express���
const myroutes=myexpress.Router();//ʹ��express��Route��������·�ɵĴ���
const usercontrol=require('./../control/control.js');//����usercontrol.js�ļ�
const ProductListControl=require('./../control/ProductListControl.js');//����ProductListControl.js�ļ�����Ʒ�б�ҳ
const IndexControl = require('./../control/indexControl.js');//����indexControl�ļ�

myroutes.post('/login.do',usercontrol.userlogin);//��¼

myroutes.post('/sendCode.do',usercontrol.sendCode);//������֤��

myroutes.post('/reg.do',usercontrol.reg);//ע����֤

//Productlist��Ʒ�б�ҳ��·�ɷ���  start
myroutes.post("/ProListShangPin.do",ProductListControl.ProListShangPin);
//Productlist��Ʒ�б�ҳ��·�ɷ���  end

//index��ҳ��·�ɷ���  start
myroutes.get('/index.html',IndexControl.indexPage);
//index��ҳ��·�ɷ���  end

/*���ﳵģ��*/
myroutes.get('/carlib.do',usercontrol.carlib);
myroutes.get('/carnum.do',usercontrol.carnum);
myroutes.get('/delcar.do',usercontrol.delcar);
/*���ﳵ����*/

module .exports=myroutes;




