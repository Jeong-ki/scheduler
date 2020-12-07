var express = require('express');
var router = express.Router();
const mysql = require('mysql');
var shortid = require('shortid');
// 비밀번호 암호화(bcrypt) 추후 고려

db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '111111',
  database : 'list'
});
db.connect(); 

function getTodayLabel() {
  var week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
  let today = new Date();   
  let date = today.getDate();  // 날짜
  let day = today.getDay();  // 요일
  var todayLabel = week[day] + ', ' + date;
  return todayLabel;
}
let now = getTodayLabel();

module.exports = function(passport){
  router.get('/login', function(request, response){
    var fmsg = request.flash();
    var feedback = '';
    if(fmsg.error){
      feedback = fmsg.error[0];
    }
    console.log(fmsg);
    response.render('temp', {
      topics: false,
      date: now,
      create: false,
      login: true,
      authIsOwner: false,
      feedback: feedback
    })
  });
  
  router.post('/login_process', passport.authenticate('local', { 
    successRedirect: '/', 
    failureRedirect: '/auth/login',
    failureFlash:true
    //successFlash: true
  }));

  router.get('/register', function(request, response){
    var fmsg = request.flash();
    var feedback = '';
    if(fmsg.error){
      feedback = fmsg.error[0];
    }
    console.log(fmsg);
    response.render('temp', {
      topics: false,
      date: now,
      create: false,
      register: true,
      authIsOwner: false,
      feedback: feedback
    })
  });
  
  router.post('/register_process', function(request, response){
    var post = request.body;
    if(post.email==='' || post.pwd==='' || post.pwd2==='' || post.displayName===''){
      console.log(post);
      request.flash('error', 'Fill in all the blanks');
      response.redirect('/auth/register');
    } else if(post.pwd !== post.pwd2){
      console.log(post);
      request.flash('error', 'Password must same!');
      response.redirect('/auth/register');
    } else {
      console.log(post);
      db.query(`INSERT INTO user (id, email, password, displayName)
        VALUES(?, ?, ?, ?);`, 
        [shortid.generate(), post.email, post.pwd, post.displayName],
        function(error, user){
          if(error){
            throw error;
          }
        })
      db.query('SELECT * FROM user', function(error, user){
        request.login(user[user.length-1], function(err){  // [0]으로 해도되는지?
          console.log('user', user[user.length-1]);
          response.redirect(`/`);
        })
      })
    }  
  });

  router.get('/logout', function(request, response){
    request.logout();
    request.session.save(function(err){
      response.redirect('/');
    })
  });
  return router;
}