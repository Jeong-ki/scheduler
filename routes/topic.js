var express = require('express');
var router = express.Router();
const path = require('path');
const sanitizeHtml = require('sanitize-html');
const mysql = require('mysql');

db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '111111',
  database : 'list'
});
db.connect();

function authIsOwner(request, response){
  if(request.user){
    nick = request.user[0].displayName;
    return true;
  } else{
    nick = false;
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

router.get('/create', function(request, response){
  if(!authIsOwner(request, response)){
    response.redirect('/');
    return false;
  }
  response.render('temp', {
    topics: false,
    date: now,
    create: true,
    authIsOwner: authIsOwner(request, response),
    nickname: nick
  })
});

router.post('/create_process', function(request, response){
  if(!authIsOwner(request, response)){
    response.redirect('/');
    return false;
  }
  var post = request.body;
  db.query(`SELECT * FROM user`, function(error, user){
    db.query(`INSERT INTO topic (title, description, user_id)
    VALUES(?, ?, ?);`, 
    [post.title, post.description, request.user[0].id],
    function(error, result){
      if(error){
        throw error;
      }
      response.redirect(`/`);
    })
  })
});

router.get('/update/:pageId', function(request, response){
  db.query(`SELECT * FROM topic`, function(error, topics){
    if(error){
      throw error;
    }
    var filteredId = path.parse(request.params.pageId).base;
    db.query(`SELECT * FROM topic WHERE title='${filteredId}'`, function(error2, topic){
      if(error2){
        throw error2;
      }
      var title = topic[0].title;
      var description = topic[0].description;
      var id = topic[0].id;
      response.render('temp', {
        topics: false,
        date: now,
        create: false,
        update: true,
        id: id,
        title: title,
        description: description,
        authIsOwner: authIsOwner(request, response),
        nickname: nick
        })
    });
  });
});

router.post('/update_process', function(request, response){
  var post = request.body;
    db.query('UPDATE topic SET title=?, description=? WHERE id=?', 
    [post.title, post.description, post.id], 
    function(error, result){
       if(error){
         throw error;
       }
      response.redirect(`/`);
    })
});

router.post('/delete_process', function(request, response){
  var post = request.body;
  var id = post.id;
  db.query(`DELETE FROM topic WHERE id = ?`, [post.id], function(error, result){
    if(error){
      throw error;
    }
    response.redirect('/');
  });
});

router.get('/:pageId', function(request, response, next){
    var filteredId = path.parse(request.params.pageId).base;
    db.query(`SELECT * FROM topic WHERE title='${filteredId}'`, function(error, topic){
      if(error){
        next(error);
      } else {
        var title = topic[0].title;
        var id = topic[0].id;
        var sanitizedTitle = sanitizeHtml(title);
        var sanitizedDescription = sanitizeHtml(topic[0].description, {
          allowedTags:['h1']
        });
        response.render('temp', {
          topics: '',
          date: now,
          create: false,
          update: false,
          page: true,
          sanitizedTitle: sanitizedTitle,
          sanitizedDescription: sanitizedDescription,
          id: id,
          authIsOwner: authIsOwner(request, response),
          nickname: nick
          })
        }
    });
  });

  

module.exports = router;