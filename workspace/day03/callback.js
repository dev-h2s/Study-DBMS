//callback 함수

// JS에서는 함수를 값으로 취급하기 때문에 매개변수로 전달이 가능하다.
// function average(number1, number2) {
//     return (number1 + number2) / 2;
//   }

// 함수를 값으로 취급 : 더하기 함수 + 나누기 함수가능
// =========> 더하기만 할때와 나누기가 필요할때 를 나눠서 사용 가능
// let average = add(1, 2, function (result) {
// //   callback에서 계산된 1+2가 result에 담긴다
//     return result / 2;
// });
// // 더한 값만 출력하기 위함
// let total = add(1, 2);

// // 나누기까지 출력
// console.log(average);

// // 더한 값만 출력
// console.log(total);

// function add(number1, number2, callback) {

//   if (callback) {
//     return callback(number1 + number2);
//   }
//   //없을때 +만 실행
//   return number1 + number2;
// }

// 상품명, 가격, 개수를 전달받은 뒤 전체 금액을 출력한다.
// 1. 상품명과 가격, 개수는 A함수에서 전달받는다.
// 2. B함수에서는 상품명과 전체 금액을 전달받아서 출력한다.
// 3. A함수는 B함수를 callback 함수로 전달받는다.

let total1 = pay('감자', 500, 10, function (name, price, count) {
  console.log('상품명:', name, '가격:', price, '갯수:', count);
});

console.log(`결제 금액: ${total1}원`);

function pay(name, price, count, callback) {
  if (callback) {
    // price * count가 function 에들어가 name, total이 된다
    callback(name, price, count);
  }
  return price * count;
}

// 대소 비교
// 두 정수 입력 시 첫번째 정수가 크거나 같으면 True 아니면 False이다.
// 큰 값을 다른 함수에서 출력한다.
let result = isBigger(6, 3, function (n1, n2, result) {
  if (!result) {
    //true가 아니면
    return n2;
  }
  if (n1 == n2) {
    return '두수는 같다';
  }
  return n1;
});

function isBigger(n1, n2, callback) {
  if (callback) {
    return callback(n1, n2, n1 >= n2); //ture
  }
  return n1 >= n2; //?? 무슨의미
}
console.log(result);
