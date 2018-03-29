/**
 * Created by asus-pc on 2018/3/13.
 */
function ajaxfn(obj){
    //创建对象

    var xmlhttp;
    if(window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
    }
    else if(window.ActiveXObject){
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    //设置回调

        xmlhttp.onreadystatechange=function(){
            if(xmlhttp.readyState==4&&xmlhttp.status==200){
                obj.backnum(xmlhttp);
            }
        };
        //发起请求

    if(obj.method=="get"&&obj.parm.length>0){
        obj.url=obj.url+"?"+obj.parm
    }
        xmlhttp.open(obj.method,obj.url);

      if(obj.method=="post"){
          xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
          xmlhttp.send(obj.parm);
      }else {
          xmlhttp.send(null);
      }
}


