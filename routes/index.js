const express = require('express');
const router = express.Router();
const mysql = require('mysql');
//const { isDeepStrictEqual } = require('util');

db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '111111',
  database : 'list'
});
db.connect();

function authIsOwner(request, response){
  if(request.user){
      return true;
    } else{
      return false;
    }
}

function getTodayLabel() {
  var week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
  let today = new Date();   
  let date = today.getDate();  // 날짜
  let day = today.getDay();  // 요일
  var todayLabel = week[day] + ', ' + date;
  return todayLabel;
}
let now = getTodayLabel();

router.get('/', function(request, response){
  if(authIsOwner(request, response)){
    nick = request.user[0].displayName;
  } else {
    nick = false;
  }
  if(request.user){ 
    db.query(`SELECT * FROM topic WHERE user_id = ?`,[request.user[0].id], function(error, topics){
      response.render('temp', {
        topics: topics,
        date: now,
        authIsOwner: authIsOwner(request, response),
        nickname: nick
      })
    })
  } else {
    //db.query(`SELECT * FROM topic WHERE user_id = ?`,[request.user[0].id], function(error, topics){
      response.render('temp', {
        topics: false,
        date: now,
        authIsOwner: authIsOwner(request, response),
        nickname: nick
      })
  }
});

module.exports = router;