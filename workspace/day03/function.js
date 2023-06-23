// JS 는 오버로딩을 지원하지 않는다.
// let result = add(1, 2, 3);
// // let result = add(1,2);
// console.log(result);
// function add(number1, number2, number3) {
//   return number1 + number2 + number3;
// }
// // 함수의 이름이 같다면 마지막에 선언된 함수로 실행 오버로드 지원 x
// function add(number1, number2) {
//   return number1 + number2;
// }
// -------------------------------------------------------------
//....가변인자
// let result = add(1, 2, 3, 4);
// console.log(result);
// // ...(가변인자)이면 몇개 들어올지 모르는 array 타입이된다
// // 매개변수에 가변인자가 포함되있을경우 가변인자는 매개변수의 마지막에 위치해야한다.
// function add(name = '송태섭', ...numbers) {
//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     result += numbers[i];
//   }
//   return result;
// }
//--------------------------------------------
var result = 10;
// 이름은 무조간 받고 나머지는 선택사항~
intro('송태섭', '남자', '23', '강서구');
function intro(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log("\uC774\uB984: ".concat(name));
    for (var i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}
// typescript 설치 명령어
// npm install typescript --save-dev
// npm install -g typescript
// npm install -g ts-node @types/node
// npx tsc
// Set-ExecutionPolicy Unrestricted (관리자 권한으로 실행)
// tsc --init
