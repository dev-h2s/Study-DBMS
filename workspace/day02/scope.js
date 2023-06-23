// var x = 20; //지역변수와 이름이 겹치지 않는 전역변수
// global.x = 5; //node.js에서의 최상위 객체
// window.x = 5; // 브라우저에서의 최상위 객체
// globalThis.x = 5; // global과 window 객체를 상황에 맞게 사용해주는 전역 객체

// function f(){
//     var x =  10; // 지역변수
//     y = 20; // 전역변수
//     var z = 30; // 지역변수
//     console.log(x); //10
//     console.log(global.x);
//     console.log(y);//20
// }

// f();
// console.log(x); //20
// console.log(y); //20
// // console.log(z); // 지역변수를 가져오지 못해 오류

// for는 함수가 아니라서 다른 영역에서 사용가능 for의 i도 밖에서 사용이 가능하다
for (var i = 0; i < 10; i++) {}
console.log(i);
