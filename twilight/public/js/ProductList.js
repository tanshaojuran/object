/**
 * Created by 杨玉梅 on 2018/3/29.
 */
$(function(){
    //轮播小图片的点击事件
    var ProListdiv=$("#ProListS1Left>div>div");
    $(ProListdiv[0]).css({"box-shadow":"0px 0px 4px #888"});
    $(ProListdiv).on("click",function(){
        ProListdiv.css({"border":"4px solid #f8f8f8","box-shadow":"0px 0px 0px #888"});
        $(this).css({"border":"4px solid #ffffff","box-shadow":"0px 0px 4px #888"});
        if($(this).index()==0){
            $("#ProListS1Center img").attr({ src: "../images/ycxl_dt_01.jpg", alt: "大图1" });
            $("#prolistS1Right div div img").attr({ src: "../images/ycxl_zst_01.jpg", alt: "展示图1" });
            $("#prolistS1Right div h2").text("北欧餐厅长形吊灯");
            $("#prolistS1Right div h3").text("A Nordic restaurant");
            $("#prolistS1Right div p span").text("475.00");
        }else if($(this).index()==1){
            $("#ProListS1Center img").attr({ src: "../images/ycxl_dt_02.jpg", alt: "大图2" });
            $("#prolistS1Right div div img").attr({ src: "../images/ycxl_zst_02.jpg", alt: "展示图2" });
            $("#prolistS1Right div h2").text("北欧餐厅圆形吊灯");
            $("#prolistS1Right div h3").text("A Nordic restaurant");
            $("#prolistS1Right div p span").text("550.00");
        }else if($(this).index()==2){
            $("#ProListS1Center img").attr({ src: "../images/ycxl_dt_03.jpg", alt: "大图3" });
            $("#prolistS1Right div div img").attr({ src: "../images/ycxl_zst_03.jpg", alt: "展示图3" });
            $("#prolistS1Right div h2").text("北欧客厅长形吊灯");
            $("#prolistS1Right div h3").text("A Nordic living room");
            $("#prolistS1Right div p span").text("355.00");
        }
    });


    //产品菜单相关事件
    //鼠标移入事件
    ProListMenuOver();
    function ProListMenuOver(){
        $(".ProListMenu li").on("mouseover" ,function() {
            $($(".ProListMenu li h2")[$(this).index()]).css({"color":"#09897d"});
            $($(".ProListMenu li p")[$(this).index()]).css({"color":"#09897d"});
            if($(this).index()==0){
                $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_01.png"})
            }
            if($(this).index()==1){
                $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_02.png"})
            }
            if($(this).index()==2){
                $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_03.png"})
            }
            if($(this).index()==3){
                $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_04.png"})
            }
            if($(this).index()==4){
                $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_05.png"})
            }
            if($(this).index()==5){
                $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_06.png"})
            }
            //鼠标移出事件
            $(".ProListMenu li").on("mouseout" ,function() {
                $($(".ProListMenu li h2")[$(this).index()]).css({"color":"#000"});
                $($(".ProListMenu li p")[$(this).index()]).css({"color":"#000"});
                if($(this).index()==0){
                    $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_01.png"})
                }
                if($(this).index()==1){
                    $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_02.png"})
                }
                if($(this).index()==2){
                    $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_03.png"})
                }
                if($(this).index()==3){
                    $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_04.png"})
                }
                if($(this).index()==4){
                    $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_05.png"})
                }
                if($(this).index()==5){
                    $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_06.png"})
                }
            });
        });
    }

    //鼠标点击事件
    $(".ProListMenu li").on("click",function(){
        //还原最初样式
        $(".ProListMenu li h2").css({"color":"#000"});
        $(".ProListMenu li p").css({"color":"#000"});
        $($(".ProListMenu li div img")[0]).attr({ src: "../images/icon_01.png"});
        $($(".ProListMenu li div img")[1]).attr({ src: "../images/icon_02.png"});
        $($(".ProListMenu li div img")[2]).attr({ src: "../images/icon_03.png"});
        $($(".ProListMenu li div img")[3]).attr({ src: "../images/icon_04.png"});
        $($(".ProListMenu li div img")[4]).attr({ src: "../images/icon_05.png"});
        $($(".ProListMenu li div img")[5]).attr({ src: "../images/icon_06.png"});
        //鼠标移入事件
        ProListMenuOver();
        $(this).on("mouseover",function(){
            $($(".ProListMenu li h2")[$(this).index()]).css({"color":"#09897d"});
            $($(".ProListMenu li p")[$(this).index()]).css({"color":"#09897d"});
            if($(this).index()==0){
                $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_01.png"})
            }
            if($(this).index()==1){
                $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_02.png"})
            }
            if($(this).index()==2){
                $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_03.png"})
            }
            if($(this).index()==3){
                $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_04.png"})
            }
            if($(this).index()==4){
                $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_05.png"})
            }
            if($(this).index()==5){
                $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_06.png"})
            }
            $(this).on("mouseout",function(){
                $($(".ProListMenu li h2")[$(this).index()]).css({"color":"#09897d"});
                $($(".ProListMenu li p")[$(this).index()]).css({"color":"#09897d"});
                if($(this).index()==0){
                    $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_01.png"})
                }
                if($(this).index()==1){
                    $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_02.png"})
                }
                if($(this).index()==2){
                    $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_03.png"})
                }
                if($(this).index()==3){
                    $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_04.png"})
                }
                if($(this).index()==4){
                    $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_05.png"})
                }
                if($(this).index()==5){
                    $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_06.png"})
                }
            });

        });
        //鼠标移出事件
        $(this).on("mouseout",function(){
            $($(".ProListMenu li h2")[$(this).index()]).css({"color":"#09897d"});
            $($(".ProListMenu li p")[$(this).index()]).css({"color":"#09897d"});
            if($(this).index()==0){
                $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_01.png"})
            }
            if($(this).index()==1){
                $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_02.png"})
            }
            if($(this).index()==2){
                $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_03.png"})
            }
            if($(this).index()==3){
                $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_04.png"})
            }
            if($(this).index()==4){
                $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_05.png"})
            }
            if($(this).index()==5){
                $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_06.png"})
            }
        });
        //改变点击的li的样式
        $(this).find("h2").css({"color":"#09897d"});
        $(this).find("p").css({"color":"#09897d"});
        if($(this).index()==0){
            $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_01.png"})
            ProListAjax();
        }
        if($(this).index()==1){
            $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_02.png"})
        }
        if($(this).index()==2){
            $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_03.png"})
        }
        if($(this).index()==3){
            $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_04.png"})
        }
        if($(this).index()==4){
            $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_05.png"})
        }
        if($(this).index()==5){
            $($(".ProListMenu li div img")[$(this).index()]).attr({ src: "../images/icon_djs_06.png"})
        }
    });
    //第一个li先执行一次点击事件
    $($(".ProListMenu li")[0]).click();

    //价格区间
    $('.slider-input').jRange({
        from: 0,
        to: 3000,
        step: 100,
        scale: [0,500,1000,1500,2000,2500,3000],
        format: '%s',
        width: 400,
        showLabels: true,
        showScale: true
    });
    $(".ProListS3Queren").on("click",function(){
        console.log($(".slider-input").val())
    });

    //收藏,动态绑定点击事件
    $("#ProListS4Ul").on("click","li div .ProListXin",function(){
        if($(this).attr("ProListSC")=="f"){
            $(this).html("&#xe684;");
            $(this).attr("ProListSC","t")
        }else if($(this).attr("ProListSC")=="t"){
            $(this).html("&#xe643;");
            $(this).attr("ProListSC","f")
        }

    });

    //列表请求数据

    function ProListAjax(parameter){
        $.ajax({
            type: "post",
            url: "/ProListShangPin.do",
            data:parameter,
            dataType : "json",
            success: function(data){
                var ProductList=$("#ProListS4Ul");
                ProductList.html("");
                console.log(data)
                for(var i=0;i<=data.length;i++){
                    ProductList.append("<li><div><img src='"+data[i].FaceImg+"'/></div>" +
                    "<div><h3>"+data[i].name+"</h3>" +
                    "<i class='icon'>&#xe63f;</i>" +
                    "<i class='icon ProListXin'ProListSC='f'>&#xe643;</i>" +
                    "<p>￥<span>"+data[i].price+"</span></p></div></li>");
                }
            }

        })
    }


});
