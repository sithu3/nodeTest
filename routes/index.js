var express = require('express');
var router = express.Router();
var Admin=require('../model/Admin')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup', function(req, res) {
  res.render('signup');
});

router.post('/signup', function(req, res) {
  var admin=new Admin();

  admin.name=req.body.name;
  admin.email=req.body.email;
  admin.password=req.body.pwd;

  admin.save(function(err,rtn){
    if(err)throw err;
    console.log(rtn);
    res.redirect('/');
  })
});

router.get('/signin', function(req, res) {
  res.render('signin');
});

router.post('/signin', function(req, res) {

Admin.findOne({email:req.body.email},function(err,rtn){
console.log(rtn,req.body.pwd);
  if(err) throw err;
  if(rtn != null && Admin.compare(req.body.pwd,rtn.password)){
    req.session.user={name:rtn.name,email:rtn.email,id:rtn._id}
    res.redirect('/')
  }
  else {
    res.redirect('/signin')
  }
})

});

router.post('/emaildu',function(req,res){
  Admin.findOne({email:req.body.email},function(err,rtn){
    if(err)throw err;
    console.log(rtn);
    if(rtn !=null){
      res.json({status:true})
    }
    else{
      res.json({status:false})
    }
  })
})




module.exports = router;
