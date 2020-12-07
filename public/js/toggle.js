let blue = document.getElementById('blue');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');
let red = document.getElementById('red');
let list = document.getElementsByClassName('list');

if(sessionStorage.getItem('toggle') === 'blue'){
  init1();
} else if(sessionStorage.getItem('toggle') === 'yellow'){
  init2();
} else if(sessionStorage.getItem('toggle') === 'green'){
  init3();
} else if(sessionStorage.getItem('toggle') === 'red'){
  init4();
}
console.log(sessionStorage.getItem('toggle'));
// click toggle btn
// blue btn
function init1(){  
  document.getElementById('right_bar').style.backgroundColor='rgb(73, 149, 179)';
  document.getElementById('main').style.borderColor='rgb(73, 149, 179)';
  document.getElementById('date').style.color='#66C5EB';
  document.getElementById('create').style.backgroundColor='rgb(118,204,238)';
  for(let i=0; i<list.length; i++){
    list[i].style.borderColor='skyblue';
    list[i].onmouseover = function() {
      this.style.borderColor = "#ffca63";
    } 
    list[i].onmouseout = function() {
      this.style.borderColor = "skyblue";
    } 
  }
  document.getElementById("create").onmouseover = function() {
    this.style.backgroundColor = "#ffca63";
  } 
  document.getElementById("create").onmouseout = function() {
    this.style.backgroundColor = "rgb(118,204,238)";
  }
  document.getElementById('stdiv').style.backgroundColor='rgb(151,201,231)';

  if(document.getElementById('infoText')){
    document.getElementById('infoText').style.borderColor='rgb(151,201,231)';
    document.getElementById('infoDes').style.borderColor='rgb(151,201,231)';
    document.getElementById('infoBtn').style.borderColor='rgb(151,201,231)';
    document.getElementById('infoBtn').style.backgroundColor='rgb(151,201,231)';
  }
  if(document.getElementById('upBtn')){
    document.getElementById('upBtn').style.backgroundColor='rgb(151,201,231)';
    document.getElementById('upBtn').style.borderColor='rgb(151,201,231)';
  }
  sessionStorage.setItem('toggle', 'blue');
}

// yellow btn
function init2(){
  document.getElementById('right_bar').style.backgroundColor='rgb(233, 183, 47)';
  document.getElementById('main').style.borderColor='rgb(233, 183, 47)';
  document.getElementById('date').style.color='rgb(255, 218, 115)';
  document.getElementById('create').style.backgroundColor='rgb(255, 218, 115)';
  for(let i=0; i<list.length; i++){
    list[i].style.borderColor='rgb(255, 218, 115)';
    list[i].onmouseover = function() {
      this.style.borderColor = "skyblue";
    } 
    list[i].onmouseout = function() {
      this.style.borderColor = "rgb(255, 218, 115)";
    } 
  }
  document.getElementById("create").onmouseover = function() {
    this.style.backgroundColor = "skyblue";
  } 
  document.getElementById("create").onmouseout = function() {
    this.style.backgroundColor = "rgb(255, 218, 115)";
  }
  document.getElementById('stdiv').style.backgroundColor='rgb(255, 218, 115)';

  if(document.getElementById('infoText')){
    document.getElementById('infoText').style.borderColor='rgb(255, 218, 115)';
    document.getElementById('infoDes').style.borderColor='rgb(255, 218, 115)';
    document.getElementById('infoBtn').style.borderColor='rgb(255, 218, 115)';
    document.getElementById('infoBtn').style.backgroundColor='rgb(255, 218, 115)';
  }
  if(document.getElementById('upBtn')){
    document.getElementById('upBtn').style.backgroundColor='rgb(255, 218, 115)';
    document.getElementById('upBtn').style.borderColor='rgb(255, 218, 115)';
  }
  sessionStorage.setItem('toggle', 'yellow');
}

// green btn
function init3(){
  document.getElementById('right_bar').style.backgroundColor='rgb(1, 116, 1)';
  document.getElementById('main').style.borderColor='rgb(1, 116, 1)';
  document.getElementById('date').style.color='rgb(29, 165, 29)';
  document.getElementById('create').style.backgroundColor='rgb(29, 165, 29)';
  for(let i=0; i<list.length; i++){
    list[i].style.borderColor='rgb(29, 165, 29)';
    list[i].onmouseover = function() {
      this.style.borderColor = "#ffca63";
    } 
    list[i].onmouseout = function() {
      this.style.borderColor = "rgb(29, 165, 29)";
    } 
  }
  document.getElementById("create").onmouseover = function() {
    this.style.backgroundColor = "#ffca63";
  } 
  document.getElementById("create").onmouseout = function() {
    this.style.backgroundColor = "rgb(29, 165, 29)";
  }
  document.getElementById('stdiv').style.backgroundColor='rgb(29, 165, 29)';
  if(document.getElementById('infoText')){
    document.getElementById('infoText').style.borderColor='rgb(29, 165, 29)';
    document.getElementById('infoDes').style.borderColor='rgb(29, 165, 29)';
    document.getElementById('infoBtn').style.borderColor='rgb(29, 165, 29)';
    document.getElementById('infoBtn').style.backgroundColor='rgb(29, 165, 29)';
  }
  if(document.getElementById('upBtn')){
    document.getElementById('upBtn').style.backgroundColor='rgb(29, 165, 29)';
    document.getElementById('upBtn').style.borderColor='rgb(29, 165, 29)';
  }
  sessionStorage.setItem('toggle', 'green');
}

//red btn
function init4(){
  document.getElementById('right_bar').style.backgroundColor='rgb(226, 65, 65)';
  document.getElementById('main').style.borderColor='rgb(226, 65, 65)';
  document.getElementById('date').style.color='rgb(253, 120, 120)';
  document.getElementById('create').style.backgroundColor='rgb(253, 120, 120)';
  for(let i=0; i<list.length; i++){
    list[i].style.borderColor='rgb(253, 120, 120)';
    list[i].onmouseover = function() {
      this.style.borderColor = "skyblue";
    } 
    list[i].onmouseout = function() {
      this.style.borderColor = "rgb(253, 120, 120)";
    } 
  }
  document.getElementById("create").onmouseover = function() {
    this.style.backgroundColor = "skyblue";
  } 
  document.getElementById("create").onmouseout = function() {
    this.style.backgroundColor = "rgb(253, 120, 120)";
  }
  document.getElementById('stdiv').style.backgroundColor='rgb(253, 120, 120)';
  if(document.getElementById('infoText')){
    document.getElementById('infoText').style.borderColor='rgb(253, 120, 120)';
    document.getElementById('infoDes').style.borderColor='rgb(253, 120, 120)';
    document.getElementById('infoBtn').style.borderColor='rgb(253, 120, 120)';
    document.getElementById('infoBtn').style.backgroundColor='rgb(253, 120, 120)';
  }
  if(document.getElementById('upBtn')){
    document.getElementById('upBtn').style.backgroundColor='rgb(151,201,231)';
    document.getElementById('upBtn').style.borderColor='rgb(151,201,231)';
  }
  sessionStorage.setItem('toggle', 'red');
}

blue.addEventListener('click', function(){
  init1();
});

yellow.addEventListener('click', function(){
  init2();
});

green.addEventListener('click', function(){
  init3();
});

red.addEventListener('click', function(){
  init4();
});