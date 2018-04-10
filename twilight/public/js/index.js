/**
 * Created by Administrator on 2018/3/30 0030.
 */

$(document).ready(function(){
    //part1···banner自动轮播+点击==============
    var sy_bannerDiv = $("#sy_banner div");
    var sy_bannerBot = $("#sy_banner_bot span");
    var sy_bannerTxt = $("#sy_banner div img");
    var sy_bannerBtn = $("#sy_banner div a");

    //part2···点击轮播====================
    var sy_part2_imgXT = $(".sy_part2_imgXt div");
    var sy_part2_leftImg = $("#sy_part2_leftImg img");
    var sy_part2_rightContH3 = $("#sy_part2_rightCont h3");


    //part5···点击轮播=====================
    var sy_gywm_dateBox = $("#sy_gywm_date div");
    var sy_gywm_cont = $("#sy_gywm_cont>div");
    var sy_gywm_img = $("#sy_gywm_img div a img");
    var sy_gywm_imgBox =$("#sy_gywm_img div");


    var sy_auto=setInterval(sy_change,4000); //part1···自动轮播
    var sy_p = 0;

    //part1···初始化css================
    $(sy_bannerBot[0]).css({"backgroundColor":"#09897d"});
    sy_bannerDiv.hide();
    sy_bannerTxt.hide();
    sy_bannerBtn.hide();
    $(sy_bannerDiv[0]).fadeIn().show(function(){
        $(sy_bannerTxt[0]).fadeIn(800).show();
        $(sy_bannerBtn[0]).fadeIn(1500).show();
    });

    //part2···初始化css================
    $(sy_part2_imgXT[2]).css({"border":"5px solid rgba(255, 255, 255, 1)","box-shadow":"0 0 12px #101010"});

    //part1···自动轮播
    function sy_change(){
        sy_bannerDiv.hide();
        sy_bannerTxt.hide();
        sy_bannerBtn.hide();
        sy_bannerBot.css({"backgroundColor":"#dfdfdf"});
        if(sy_p<2){
            sy_p++;
        }else{
            sy_p=0;
        }
        $(sy_bannerBot[sy_p]).css({"backgroundColor":"#09897d"});
        $(sy_bannerDiv[sy_p]).fadeIn(1000).show();
        $(sy_bannerTxt[sy_p]).fadeIn(800).show();
        $(sy_bannerBtn[sy_p]).fadeIn(1500).show();
        $(sy_bannerDiv[sy_p]).show();
    };
    //part1···bot点击事件
    sy_bannerBot.on("click",sy_botBtn);
    function sy_botBtn(){
        sy_bannerBot.css({"backgroundColor":"#dfdfdf"});
        $(this).css({"backgroundColor":"#09897d"});
        sy_bannerDiv.hide();
        sy_bannerTxt.hide();
        sy_bannerBtn.hide();
        $(sy_bannerDiv[$(this).index()]).fadeIn().show();
        $(sy_bannerTxt[$(this).index()]).fadeIn(800).show();
        $(sy_bannerBtn[$(this).index()]).fadeIn(1500).show();
        sy_p=$(this).index();
        clearInterval(sy_auto); //点击时清除轮播
        setTimeout(function(){  //几秒后重启轮播
            sy_auto=setInterval(sy_change,4000);
        },2500);
    };

    //part2···smallImg点击事件
    sy_part2_imgXT.on("click",function(){
        sy_part2_imgXT.css({"border":"5px solid rgba(255, 255, 255, 0)","box-shadow":"0 0 0 #101010"});
        if($(this).index()==2){
            $(this).css({"border":"5px solid rgba(255, 255, 255, 1)","box-shadow":"0 0 12px #101010"});
            sy_part2_leftImg.attr({src:"images/sy_yxrm01.png"});
            sy_part2_rightContH3.text('北欧餐厅简约吊灯');
        }else if($(this).index()==1){
            $(this).css({"border":"5px solid rgba(255, 255, 255, 1)","box-shadow":"0 0 12px #101010"});
            sy_part2_leftImg.attr({src:"images/sy_yxrm02.png"});
            sy_part2_rightContH3.text('北欧客厅简约落地灯');
        }else if($(this).index()==0){
            $(this).css({"border":"5px solid rgba(255, 255, 255, 1)","box-shadow":"0 0 12px #101010"});
            sy_part2_leftImg.attr({src:"images/sy_yxrm03.png"});
            sy_part2_rightContH3.text('北欧长形吊灯');
        }
    });

    //part5···左右点击事件
    $(".sy_perv,.sy_next").mouseover(function(){
        $(this).css({"color":"#09897d","cursor":"pointer"})
    });
    $(".sy_perv,.sy_next").mouseout(function(){
        $(this).css({"color":"#0f0f0f"})
    });
    $(".sy_perv").on("click",function(){
        sy_gywm_imgBox.css({"marginLeft":"-=430px"});
        sy_gywm_dateBox.css({"marginLeft":"-=60px"});
        sy_gywm_cont.css({"marginLeft":"-=300px"});
        if(parseInt(sy_gywm_imgBox.css("marginLeft"))<=-860){
            sy_gywm_imgBox.css({"marginLeft":"0px"});
            sy_gywm_dateBox.css({"marginLeft":"0px"});
            sy_gywm_cont.css({"marginLeft":"0px"});
        }
    });
    $(".sy_next").click(sy_gywmMove);
    function sy_gywmMove(){
        sy_gywm_imgBox.css({"marginLeft":"-=430px"});
        sy_gywm_dateBox.css({"marginLeft":"-=60px"});
        sy_gywm_cont.css({"marginLeft":"-=300px"});
        if(parseInt(sy_gywm_imgBox.css("marginLeft"))<=-860){
            sy_gywm_imgBox.css({"marginLeft":"0px"});
            sy_gywm_dateBox.css({"marginLeft":"0px"});
            sy_gywm_cont.css({"marginLeft":"0px"});
        }
        $(".sy_next").unbind("click");
        setTimeout(function(){
            $(".sy_next").click(sy_gywmMove)
        })
    }






});



