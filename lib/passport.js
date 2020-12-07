module.exports = function(app){
  
  const mysql = require('mysql');
  db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '111111',
    database : 'list'
  });
  db.connect();

  var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

  app.use(passport.initialize());  // passport를 express에 설치
  app.use(passport.session());  // 내부적으로 세션을 사용

  // login성공 - session store에 저장, 딱한번호출
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  // 저장된 유저 데이터 필요할때마다 호출
  passport.deserializeUser(function(id, done) {
    db.query(`SELECT * FROM user WHERE id='${id}'`, function(error, use){
      done(null, use);
    });
  });

  passport.use(new LocalStrategy(
    {
      usernameField: 'email',  // 받는 값의 이름 name 설정, 기본폼 안쓸때
      passwordField: 'pwd'
    },
    function(email, password, done) { 
      var sql = 'SELECT * FROM user WHERE email=? AND password=?'; 
      db.query(sql, [email, password], function(err, result){
        if(result[0]){
          return done(null, result[0]); 
        } else {
          return done(null, false, { message: 'Incorrect User.' });
        }
      })
    }
  ));
  return passport;
}