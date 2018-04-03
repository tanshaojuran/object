CREATE DATABASE twilight;
USE twilight;
#drop database twilight;


/*1、用户表*/

CREATE TABLE user_list(
user_id           INT  PRIMARY KEY AUTO_INCREMENT,
user_name         NVARCHAR(20) NOT NULL,            /*用户名*/
user_pwd          NVARCHAR(20) NOT NULL,            /*密码*/
user_tel          NVARCHAR(20) NOT NULL,            /*电话*/
user_nc           VARCHAR(8) ,                      /*昵称*/
user_sex          CHAR(5)NOT NULL DEFAULT'男',
user_img          VARCHAR(100),                     /*头像*/
user_style        VARCHAR(100),                     /*个性签名*/
user_is_use       VARCHAR(10),                      /*是否使用*/
user_usedate      DATE                              /*注册时间*/
);
#DROP TABLE user_list;



/*2、收货地址表*/

CREATE TABLE user_addr(
add_id          INT  PRIMARY KEY AUTO_INCREMENT,

res_name        VARCHAR(20) NOT NULL,               /*收件人姓名*/
res_phone       VARCHAR(11) NOT NULL,               /*收件人电话*/
add_state       VARCHAR(20) NOT NULL,               /*省*/
add_city        VARCHAR(20) NOT NULL,               /*市*/
add_district    VARCHAR(20) NOT NULL,               /*区*/
add_address	VARCHAR(100) NOT NULL,              /*详细地址*/
add_isdefault   INT(2) NOT NULL,	            /*是否默认*/
add_isused	INT(5) NOT NULL,                    /*是否启用*/
user_id	        INT,                                /*用户ID*/
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

/*8、产品列表*/

CREATE TABLE product_list(
good_id	        INT PRIMARY KEY AUTO_INCREMENT,
good_name       VARCHAR(20) NOT NULL NOT NULL,                         /*产品名*/
good_date    DATE NOT NULL,                                            /*上架时间*/
good_price DOUBLE,                                                     /*商品进价*/
shop_price DOUBLE,                                                     /*商品卖价*/
market_price DOUBLE,                                                   /*市场价*/
good_cs     VARCHAR(200),                                               /*产品参数*/
good_img        VARCHAR(100) NOT NULL,                                 /*图片*/
good_left_img	VARCHAR(100) NOT NULL,
good_right_img	VARCHAR(100) NOT NULL,
good_top_img	VARCHAR(100) NOT NULL,
good_buttom_img	VARCHAR(100) NOT NULL
);

#DROP TABLE product_list;



/*4、用户上传产品表*/

CREATE TABLE user_updateGoods(
design_id            INT PRIMARY KEY AUTO_INCREMENT,
good_id             INT,                           /*产品id*/
FOREIGN KEY(good_id) REFERENCES product_list(good_id),
update_Goods_left    INT NOT NULL,                  /*上传产品横坐标*/
update_Goods_top     INT NOT NULL,                  /*上传产品纵坐标*/
update_Goods_rotate  INT NOT NULL,                  /*上传产品旋转角度*/
Design_date          DATE                           /*是否启用*/
);

#DROP TABLE user_updateGoods;


/*5、购物车列表*/

CREATE TABLE user_shoppingCar(
car_id        INT PRIMARY KEY AUTO_INCREMENT,
user_id       INT,                                          /*用户id*/
FOREIGN KEY(user_id) REFERENCES user_list(user_id),  
res_zt	      VARCHAR(20) NOT NULL,                         /*购物产品状态*/
car_num	      INT NOT NULL,                                 /*购物产品数量*/
car_price     FLOAT NOT NULL,                               /*购物产品价格*/
car_date      DATE NOT NULL                                 /*添加购物车时间*/
);


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
order_Res_name VARCHAR(20) NOT NULL,                                 /*收件人姓名*/
order_time     DATE NOT NULL,                                        /*订单时间*/
res_state      CHAR(5) NOT NULL DEFAULT'1'                          /*订单状态 0是已付款，1是待付款*/	
);

/*DROP TABLE user_order;*/


/*9、产品字典表*/

CREATE TABLE product_dictionary(
dic_id          INT PRIMARY KEY AUTO_INCREMENT,
good_id	        INT,                                                     /*产品id*/
FOREIGN KEY(good_id) REFERENCES product_list(good_id),  
dic_class       VARCHAR(20) NOT NULL,                                        /*产品类别*/
dic_color       FLOAT NOT NULL                                          /*产品颜色*/
);

/*DROP TABLE product_list;*/

/*10、退货表*/

CREATE TABLE product_return(
refuse_id	INT PRIMARY KEY AUTO_INCREMENT,                       /*退货单号*/
good_id	INT NOT NULL,                                                 /*退货产品id*/
FOREIGN KEY(good_id) REFERENCES product_list(good_id),  
refuse_num	INT NOT NULL,                                         /*退胡产品数量*/
refuse_total	FLOAT NOT NULL,                                       /*退货产品价格*/
refuse_time	DATE NOT NULL,                                        /*退货时间*/
refuse_re	VARCHAR(120) NOT NULL                                 /*退货人*/
);

/*DROP TABLE product_list;*/

