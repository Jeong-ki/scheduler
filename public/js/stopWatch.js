// TODO: 여러 사용자가 다른 스톱워치를 사용하게
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');

let time = 0;
let starFlag = true;
let hour = 0;
let min = 0;
let sec = 0;
let timer;
let tt;



function init(){
  sessionStorage.setItem('using', true);
  if(starFlag){
    starFlag = false;

    timer = setInterval(function(){
      if(sessionStorage.getItem('time') == 'false' || sessionStorage.getItem('watch') == undefined){
        time = 0;
      } else {
        time = parseInt(sessionStorage.getItem('time'));
      }
      time++;
      min = Math.floor(time/60);
      hour = Math.floor(min/60);
      sec = time%60;
      min = min%60;

      var th = hour;
      var tm = min;
      var ts = sec;

      if(th < 10){
        th = "0" + hour;
      }
      if(tm < 10){
        tm = "0" + min;
      }
      if(ts < 10){
        ts = "0" + sec;
      }
      tt = th + ":" + tm + ":" + ts;
      sessionStorage.setItem('time', time);
      sessionStorage.setItem('watch', tt);
      document.getElementById("timer").innerHTML = tt;
      console.log(tt);
    }, 1000)
  }
}

// 실행중일 때, 계속 실행
if(sessionStorage.getItem('using') == 'true'){
  init();
}

if(sessionStorage.getItem('watch') == 'false' || sessionStorage.getItem('watch') == undefined){
  document.getElementById("timer").innerHTML = '00:00:00';
} else {
  document.getElementById("timer").innerHTML = sessionStorage.getItem('watch');
}

startBtn.addEventListener('click', function(){
  init();
});

stopBtn.addEventListener('click', function(){
  sessionStorage.setItem('using', false);
  if(time != 0){
    clearInterval(timer);
    starFlag = true;
  }
});

resetBtn.addEventListener('click', function(){
  sessionStorage.setItem('using', false);
  if(time != 0){
    clearInterval(timer);
    starFlag = true;
    sessionStorage.setItem('time', false);
    sessionStorage.setItem('watch', false);
    document.getElementById("timer").innerHTML = '00:00:00';
  }
});