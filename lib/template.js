const express = require('express');
const app = express();  // express는 함수, 호출
const fs = require('fs');
const mysql = require('mysql');
db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '111111',
  database : 'list'
});
db.connect();

app.use(express.static('public'));


module.exports = {
  // HTML:function(title, list, body){
  //   return `
  //   <!doctype html>
  //   <html>
  //   <head>
  //     <title>WEB1 - ${title}</title>
  //     <meta charset="utf-8">
  //     <link rel="stylesheet" href="/css/style.css">
  //   </head>
  //   <body>
  //     <section class="left_bar">
  //       <div id="logo">
  //         <h1>logo</h1>
  //       </div>
  //       <div id="btn">
  //         <button>one</button>
  //         <button>two</button>
  //       </div>
  //     </section>

  //     <section class="main">
  //       <div id="main">
  //         <div id="head">
  //           <h1><a href="/">Today's Schedule</a></h1>
  //           <h3 class="create"><a href="/topic/create">create</a></h3>
  //         </div>
  //         <div>
  //           <h2 id="date">date</h2>
  //         </div>

  //         <div>
  //             ${list}
  //         </div>

  //             ${body}
  //           <img src="/images/hello.jpg">
  //       </div>
  //     </section>

  //     <section class="right_bar">
  //       <div>
  //         <h1>right</h1>
  //       </div>
  //     </section>
  //   </body>
  //   </html>
  //   `;
  // },list:
  function(topics){
    var list = '<div>';
    var i = 0;
    while(i < topics.length){
      list = list + `
      <div class="topics">
      <p><a href="/topic/${topics[i].title}">${topics[i].title}</a></p>
      <p>${topics[i].description}</p>
      <button type="button" onclick="alert('hi')">test</button>
      </div>`;
      i = i + 1;
    }
    list = list+'</div>';
    return list;
  }
}
