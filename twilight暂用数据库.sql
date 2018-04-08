CREATE DATABASE twilight;
USE twilight;
#drop database twilight;


/*1、用户表*/

CREATE TABLE user_list(
user_id           INT  PRIMARY KEY AUTO_INCREMENT,
user_name         NVARCHAR(20) NOT NULL,            /*用户名*/
user_pwd          VARCHAR(20) NOT NULL,            /*密码*/
user_tel          VARCHAR(20) NOT NULL,            /*电话*/
user_nc           NVARCHAR(8) ,                      /*昵称*/
user_sex          NVARCHAR(5) DEFAULT'男',
user_img          VARCHAR(100),                     /*头像*/
user_style        NVARCHAR(100),                     /*个性签名*/
user_is_use       VARCHAR(10),                      /*是否使用*/
user_usedate      DATE                              /*注册时间*/
);
#DROP TABLE user_list;
INSERT INTO user_list VALUES(NULL,'张三','123','123','55525','','','','1','2014-02-05'); 



/*2、收货地址表*/

CREATE TABLE user_addr(
add_id          INT  PRIMARY KEY AUTO_INCREMENT,

res_name        NVARCHAR(20) NOT NULL,               /*收件人姓名*/
res_phone       VARCHAR(11) NOT NULL,                /*收件人电话*/
add_state       NVARCHAR(20) NOT NULL,               /*省*/
add_city        NVARCHAR(20) NOT NULL,               /*市*/
add_district    NVARCHAR(20) NOT NULL,               /*区*/
add_address	    NVARCHAR(100) NOT NULL,              /*详细地址*/
add_isdefault   INT(2) NOT NULL,	                 /*是否默认*/
add_isused	    INT(5) NOT NULL,                     /*是否启用*/
user_id	        INT,                                 /*用户ID*/
FOREIGN KEY(user_id) REFERENCES user_list(user_id)
);

#DROP TABLE user_addr;


/*3、用户上传场景表*/

CREATE TABLE user_updateImg(
design_id      INT PRIMARY KEY AUTO_INCREMENT,
user_id	       INT,                                 /*用户*/
FOREIGN KEY(user_id) REFERENCES user_list(user_id),  
design_img     VARCHAR(100),                        /*上传场景图片*/
Design_date    DATE                                 /*设计时间*/
);

#DROP TABLE user_updateImg;

/*9、产品类别表*/

CREATE TABLE product_class(
class_id          INT PRIMARY KEY AUTO_INCREMENT,                        /*类别id*/
class_name        NVARCHAR(20)                                           /*类别名*/	        
);
#DROP TABLE product_class;
INSERT INTO product_class VALUES(NULL,'台灯'),(NULL,'吊灯'),(NULL,'落地灯'),(NULL,'壁灯'),(NULL,'吸顶灯'); 


/*8、产品列表*/

CREATE TABLE product_list(
good_id	        INT PRIMARY KEY AUTO_INCREMENT,
good_name       NVARCHAR(20) NOT NULL NOT NULL,                        /*产品名*/
class_id       INT,                                                    /*产品类别名id*/
FOREIGN KEY(class_id) REFERENCES product_class(class_id), 
good_date    DATE NOT NULL,                                            /*上架时间*/
good_price DOUBLE,                                                     /*商品进价*/
shop_price DOUBLE,                                                     /*商品卖价*/
market_price DOUBLE,                                                   /*市场价*/
good_cs     NVARCHAR(200),                                             /*产品参数*/
good_img        VARCHAR(100),                                          /*图片*/
good_left_img	VARCHAR(100),
good_right_img	VARCHAR(100),
good_top_img	VARCHAR(100),
good_buttom_img	VARCHAR(100)
);

#DROP TABLE product_list;

INSERT INTO product_list 
(good_id,	good_name,	class_id,	good_date,	good_price,	shop_price,	market_price,	good_cs,	good_img)
VALUES 
-- id		产品名		产品类别id	上架时间		商品成本价	商品卖价		市场价		产品参数		图片
-- 台灯
(NULL,		"欧式书房台灯",	    1,		"2018-1-1",	"150.00",	"300.00",	"350.00",	"?????????",	"../images/sp_td_01.png"),
(NULL,		"现代简约台灯",     1,		"2018-1-1",	"200.00",	"350.00",	"400.00",	"?????????",	"../images/sp_td_02.png"),
(NULL,		"简约创意台灯",	    1,		"2018-1-1",	"250.00",	"300.00",	"320.00",	"?????????",	"../images/sp_td_03.png"),
(NULL,		"北欧卧室台灯",	    1,		"2018-1-1",	"200.00",	"260.00",	"300.00",	"?????????",	"../images/sp_td_04.png"),
(NULL,		"北欧简约台灯",     1,		"2018-1-1",	"270.00",	"300.00",	"340.00",	"?????????",	"../images/sp_td_05.png"),
(NULL,		"个性创意台灯",     1,		"2018-1-1",	"180.00",	"230.00",	"250.00",	"?????????",	"../images/sp_td_06.png"),
(NULL,		"北欧现代极简台灯", 1,		"2018-1-1",	"200.00",	"260.00",	"300.00",	"?????????",	"../images/sp_td_07.png"),

-- 吊灯
(NULL,		"北欧现代简约吊灯", 2,		"2018-1-1",	"1300.00",	"1500.00",	"1700.00",	"?????????",	"../images/sp_dd_01.png"),
(NULL,		"后现代简约风吊灯", 2,		"2018-1-1",	"2100.00",	"2500.00",	"2500.00",	"?????????",	"../images/sp_dd_02.png"),
(NULL,		"简约分子吊灯",     2,		"2018-1-1",	"1800.00",	"2200.00",	"2300.00",	"?????????",	"../images/sp_dd_03.png"),
(NULL,		"简约小鸟吊灯",     2,		"2018-1-1",	"1900.00",	"2400.00",	"2500.00",	"?????????",	"../images/sp_dd_04.png"),
(NULL,		"个性简约吊灯",	    2,		"2018-1-1",	"1400.00",	"1600.00",	"1700.00",	"?????????",	"../images/sp_dd_05.png"),
(NULL,		"欧式几何简约吊灯", 2,		"2018-1-1",	"1230.00",	"1400.00",	"1450.00",	"?????????",	"../images/sp_dd_06.png"),
(NULL,		"现代北欧水晶吊灯", 2,		"2018-1-1",	"900.00",	"1100.00",	"1200.00",	"?????????",	"../images/sp_dd_07.png"),

-- 落地灯
(NULL,		"轻奢小鸟落地灯",   3,		"2018-1-1",	"800.00",	"1000.00",	"1200.00",	"?????????",	"../images/sp_ldd_01.png"),
(NULL,		"水晶羽毛落地灯",   3,		"2018-1-1",	"600.00",	"850.00",	"1000.00",	"?????????",	"../images/sp_ldd_02.png"),
(NULL,		"工业时尚落地灯",   3,		"2018-1-1",	"900.00",	"1250.00",	"1400.00",	"?????????",	"../images/sp_ldd_03.png"),
(NULL,		"简约玻璃球落地灯", 3,		"2018-1-1",	"1000.00",	"1350.00",	"1500.00",	"?????????",	"../images/sp_ldd_04.png"),
(NULL,		"钓鱼简约落地灯",   3,		"2018-1-1",	"850.00",	"1150.00",	"1300.00",	"?????????",	"../images/sp_ldd_05.png"),
(NULL,		"个性立式落地灯",   3,		"2018-1-1",	"920.00",	"1300.00",	"1450.00",	"?????????",	"../images/sp_ldd_06.png"),
(NULL,		"个性球形落地灯",   3,		"2018-1-1",	"1200.00",	"1500.00",	"1550.00",	"?????????",	"../images/sp_ldd_07.png"),

-- 壁灯
(NULL,		"简约LED创意壁灯",  4,		"2018-1-1",	"400.00",	"1000.00",	"1200.00",	"?????????",	"../images/sp_bd_01.png"),
(NULL,		"北欧简约全铜壁灯", 4,		"2018-1-1",	"800.00",	"1200.00",	"1200.00",	"?????????",	"../images/sp_bd_02.png"),
(NULL,		"现代黄铜时尚壁灯", 4,		"2018-1-1",	"700.00",	"1100.00",	"1200.00",	"?????????",	"../images/sp_bd_03.png"),
(NULL,		"创意时尚金属",	    4,		"2018-1-1",	"650.00",	"950.00",	"1200.00",	"?????????",	"../images/sp_bd_04.png"),
(NULL,		"简约时尚黄铜壁灯", 4,		"2018-1-1",	"750.00",	"1000.00",	"1200.00",	"?????????",	"../images/sp_bd_05.png"),
(NULL,		"现代简约双头壁灯", 4,		"2018-1-1",	"600.00",	"790.00",	"1200.00",	"?????????",	"../images/sp_bd_06.png"),
(NULL,		"黄铜玻璃球壁灯",   4,		"2018-1-1",	"760.00",	"1100.00",	"1200.00",	"?????????",	"../images/sp_bd_07.png"),

-- 吸顶灯
(NULL,		"马卡龙系简约吸顶灯",5,		"2018-1-1",	"900.00",	"1000.00",	"1200.00",	"?????????",	"../images/sp_xdd_01.png"),
(NULL,		"弧形现代简约吸顶灯",5,		"2018-1-1",	"1300.00",	"1500.00",	"1200.00",	"?????????",	"../images/sp_xdd_02.png"),
(NULL,		"几何个性LED吸顶灯", 5,		"2018-1-1",	"1000.00",	"1350.00",	"1200.00",	"?????????",	"../images/sp_xdd_03.png"),
(NULL,		"菱形马卡龙系吸顶灯",5,		"2018-1-1",	"600.00",	"800.00",	"1200.00",	"?????????",	"../images/sp_xdd_04.png"),
(NULL,		"实木圆形简约吸顶灯",5,		"2018-1-1",	"400.00",	"750.00",	"1200.00",	"?????????",	"../images/sp_xdd_05.png"),
(NULL,		"圆形时尚吸顶灯",    5,		"2018-1-1",	"400.00",	"850.00",	"1200.00",	"?????????",	"../images/sp_xdd_06.png"),
(NULL,		"创意几何吸顶灯",    5,		"2018-1-1",	"700.00",	"1100.00",	"1200.00",	"?????????",	"../images/sp_xdd_07.png");


/*4、用户上传产品表*/

CREATE TABLE user_updateGoods(
design_id            INT PRIMARY KEY AUTO_INCREMENT,
good_id             INT,                           /*产品id*/
FOREIGN KEY(good_id) REFERENCES product_list(good_id),
update_Goods_left    INT NOT NULL,                  /*上传产品横坐标*/
update_Goods_top     INT NOT NULL,                  /*上传产品纵坐标*/
update_Goods_rotate  INT NOT NULL,                  /*上传产品旋转角度*/
Design_date          DATE                           /*上传时间*/
);

#DROP TABLE user_updateGoods;



/*5、购物车列表*/

CREATE TABLE user_shoppingCar(
car_id        INT PRIMARY KEY AUTO_INCREMENT,
user_id       INT,                                          /*用户id*/
FOREIGN KEY(user_id) REFERENCES user_list(user_id),  
res_zt	      CHAR(20) DEFAULT'1' NOT NULL,                 /*购物产品状态*/
car_img       VARCHAR(120),                                 /*产品图片*/
good_id       INT,
FOREIGN KEY(good_id) REFERENCES product_list(good_id),      /*产品图片*/
car_num	      INT NOT NULL,                                 /*购物产品数量*/
car_price     DOUBLE NOT NULL,                              /*购物产品价格*/
car_date      DATE NOT NULL                                 /*添加购物车时间*/
);
#drop table user_shoppingCar;
#INSERT INTO user_shoppingCar value(null,1,1,"../images/sp_td_01.png",1,1,225.00,"2012-02-03");



/*6、收藏列表*/

CREATE TABLE user_like(
like_id INT PRIMARY KEY AUTO_INCREMENT,
good_id	INT(4),                                              /*收藏产品id*/
FOREIGN KEY(good_id) REFERENCES product_list(good_id),  
user_id	INT(4),                                              /*用户id*/
FOREIGN KEY(user_id) REFERENCES user_list(user_id),  
like_zt	CHAR(20) DEFAULT'1' NOT NULL,                        /*收藏产品状态 默认为0添加变为1*/
like_date DATE NOT NULL                                      /*添加收藏时间*/
);

/*7、订单列表*/

CREATE TABLE user_order(
order_id       INT PRIMARY KEY,                                      /*订单号*/
user_id	       INT,                                                  /*用户id*/
FOREIGN KEY(user_id) REFERENCES user_list(user_id),  
order_num      INT NOT NULL,                                         /*订单数量*/
order_price    FLOAT NOT NULL,                                       /*订单总价*/
order_Res_name NVARCHAR(20) NOT NULL,                                 /*收件人姓名*/
order_time     DATE NOT NULL,                                        /*订单时间*/
res_state      CHAR(5) NOT NULL DEFAULT'1'                          /*订单状态 0是已付款，1是待付款*/	
);

/*DROP TABLE user_order;*/



/*10、退货表*/

CREATE TABLE product_return(
refuse_id	INT PRIMARY KEY AUTO_INCREMENT,                       /*退货单号*/
good_id	INT NOT NULL,                                                 /*退货产品id*/
FOREIGN KEY(good_id) REFERENCES product_list(good_id),  
refuse_num	INT NOT NULL,                                         /*退胡产品数量*/
refuse_total	FLOAT NOT NULL,                                       /*退货产品价格*/
refuse_time	DATE NOT NULL,                                        /*退货时间*/
refuse_re	NVARCHAR(120) NOT NULL                                 /*退货人*/
);

/*DROP TABLE product_list;*/

