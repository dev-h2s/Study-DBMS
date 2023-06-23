// 초마다 실행
let interval = setInterval(function(){
    console.log("사랑해");
},1000);

console.log(interval);
// 몇 초뒤에 멈춰
setTimeout(function(){
    clearInterval(interval);
},5100)