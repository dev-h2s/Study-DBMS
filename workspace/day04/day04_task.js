// 기차에 등급별 좌석을 구현하자!
// 3명의 고객이 있으며, 각 고객별 정보는 다음과 같다.

// 3명은 기차 한 대에 모두 탑승한다.
// 기차 객체를 만들고 각 손님들을 프로퍼티로 선언한다.
// 이름: 홍길동
// 나이: 20
// 등급: 1

// let train = {
//   people1: {
//     name: '홍길동',
//     age: 20,
//     grade: 1,
//   },
//   // 이름: 이순신
//   // 나이: 40
//   // 등급: 2
//   people2: {
//     name: '이순신',
//     age: 40,
//     grade: 2,
//   },
//   // 이름: 장보고
//   // 나이: 19
//   // 등급: 3
//   people3: {
//     name: '장보고',
//     age: 19,
//     grade: 3,
//   },
// };

// console.log(train);
// console.log('1등급', train.people1.age);
// console.log('2등급', train.people2.grade, train.people2.name);
// console.log('3등급', train.people3);
// ===============================
// let people1 = {
//   name: '홍길동',
//   age: 20,
//   grade: 1,
// };
// // 이름: 이순신
// // 나이: 40
// // 등급: 2
// let people2 = {
//   name: '이순신',
//   age: 40,
//   grade: 2,
// };
// // 이름: 장보고
// // 나이: 19
// // 등급: 3
// let people3 = {
//   name: '장보고',
//   age: 19,
//   grade: 3,
// };
s
// let train = new Object();
// // 객체에 객체넣기
// train.passenger1 = people1;
// train.passenger2 = people2;
// train.passenger3 = people3;

// console.log(train);
// console.log(train.passenger1.age);
// ===============================

// 프로토 타입
// new 뒤에 나오는 생성자를 자바스크립트에서는 프로토타입이라고 부른다
//프로토 타입은 함수로 선언하여 사용하며 반드시 대문자로 시작한다

function User(name, age, level) {
  this.name = name;
  this.age = age;
  this.level = level;
}
let train = new Object();

let hong = new User('홍길동', 20, 1);
let lee = new User('이순신', 20, 1);
let jang = new User('장보고', 20, 1);

train.passenger1 = hong;
train.passenger2 = lee;
train.passenger3 = jang;
console.log(train);
console.log(train.passenger1);
console.log(train.passenger2.name);
// console.log(train.jang); 이건 안됨
