const express = require('express');
const app = express();  // express는 함수, 호출
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');
const port = 3000;
const mysql = require('mysql');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var flash = require('connect-flash');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '111111',
  database : 'list'
});
db.connect();

app.use(session({
  secret: 'asadlfkj!@#!@#dfgasdg',
  resave: false,
  saveUninitialized: true,
  //store: new FileStore()
}))

app.use(flash());

var passport = require('./lib/passport')(app);  // 아래 authRouter의 인자

//app.locals.pretty = true;
app.set('view engine', 'pug');
app.set('views', './views');  // 생략해도 기본값으로 되어있음
app.use(helmet());

app.use(compression());

const indexRouter = require('./routes/index');
const topicRouter = require('./routes/topic');
const authRouter = require('./routes/auth')(passport);

app.use('/', indexRouter);
app.use('/topic', topicRouter); // '/topoic'으로 시작하는 주소들에게 topicRouther라는 미들웨어를 적용하겠다
app.use('/auth', authRouter);

// 404 에러 처리
app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});
// 에러 설정
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

function hi(){
  alert('asdf');
}