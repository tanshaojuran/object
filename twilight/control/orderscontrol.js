const userModal = require('./../modal/ordermodal')
module.exports={
    addadress:function(req,res){
        let peoplename=req.query.peoplename;
        let inputleft=req.query.inputleft;
        let city=req.query.city;
        let xiangxiadress=req.query.xiangxiadress;
        console.log(peoplename)
        userModal.addadress(peoplename,inputleft,city,xiangxiadress,function(err,data){
            if(err){
                console.log(err)
            }
            res.send(data);
        })
    },
    xianshi:function(req,res){
        userModal.xianshi(function(err,data){
            res.send(data)
        })
    },
    addressdelet:function(req,res){
        let addrid=req.query.add_id;
        userModal.addressdelet(addrid,function(err,data){
            if(err){
                console.log(err)
            }
            res.send(data)
        })
    },
    addresschange:function(req,res){
        let addid=req.query.add_id
        userModal.addresschange(addid,function(err,data){
            if(err){
                console.log(err)
            }
            res.send(data)
        })
    },
    addresschangesure:function(req,res){
        let peoplename=req.query.peoplename;
        let inputleft=req.query.inputleft;
        let city=req.query.city;
        let xiangxiadress=req.query.xiangxiadress;
        let addid=req.query.add_id
        console.log(peoplename)
        console.log(addid)
        userModal.addresschangesure(peoplename,inputleft,city,xiangxiadress,addid,function(err,data){
            if(err){
                console.log(err)
            }
            res.send(data)
        })
    },
    addressmoren2:function(req,res){
        userModal.addressmoren2(function(err,data){
            res.send(data)
        })
    },
    addressmoren:function(req,res){
        let uid=req.query.add_id;
        console.log(uid)
        userModal.addressmoren(uid,function(err,data){
            if(err){
                console.log(err)
            }
            res.send(data)
        })
    },
    xianshidingdan:function(req,res){
        userModal.xianshidingdan(function(err,data){
            if(err){
                console.log(err)
            }
            res.send(data)
        })
    },
    orderxiangqing:function(req,res){
    userModal.orderxiangqing(function(err,data){
        if(err){
            console.log(err)
        }
        res.send(data)
    })
},
    gaibiandizhi2:function(req,res){
        userModal.gaibiandizhi2(function(err,data){
            if(err){
                console.log(err)
            }
            res.send(data)
            console.log(data)
        })
    },
    gaibiandizhi:function(req,res){
        let uid=req.query.add_id
        userModal.gaibiandizhi(uid,function(err,data){
            if(err){
                console.log(err)
            }
            res.send(data)
            console.log(data)
        })
    },
    xuqiudizhi:function(req,res){
        userModal.xuqiudizhi(function(err,data){
            res.send(data)
        })
    },
    xuqiudizhi2:function(req,res){
        userModal.xuqiudizhi2(function(err,data){
            res.send(data)
        })
    }

}