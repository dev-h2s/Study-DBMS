// let은 여러번 선언되는 것을 막아준다
//const: 블록 범위의 상수
const ON = 1;

function testConst() {
  ON = 2; // 두번 선언시 오류
  console.log(ON);
}

function testLet() {
  let data = 10;
  // let data = 20; // 두번 선언시 오류발생
  data = 20;
}

testLet();
testConst();
