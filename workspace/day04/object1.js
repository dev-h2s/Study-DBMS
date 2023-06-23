// 객체 선언
let account = {
  owner: '송태섭',
  age: 20,
  password: '1234',
  account: '101-2323-3344',
  address1: '서울시',
  address2: '강남구',
};

//객체 사용
console.log(account);
console.log(account.age);

account.bank = '우리은행';
console.log(account);

console.log(account['password']);

for (let i = 1; i < 3; i++) {
  console.log(account[`address${i}`]);
}

account['money'] = 10000;

// account에 있는 money에 money 값을 넣기
account.deposit = function (money) {
  this.money += money;
};

console.log(`${account.money}원`);
// // 3만원 입금

account.deposit(30000);
console.log(`${account.money}원`);

// // 생성자를 js에서 프로토타입이라 캄
// let account = new Object();
// console.log(account);
