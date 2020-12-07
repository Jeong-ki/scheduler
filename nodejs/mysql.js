var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '111111',
  database : 'list',
  multipleStatements: true  // 다중쿼리
});

connection.connect();

const sqls = 'SELECT * FROM topic'; 'SELECT * FROM user'

connection.query(sqls, function(err, results, fields) {
  if (err) throw err;
  console.log(results);
});

connection.end();