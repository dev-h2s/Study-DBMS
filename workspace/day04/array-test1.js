// 값에 ||연산자를 사용하면 false값일 경우 뒤에 있는 값으로 대체된다.
// let data = '';
// let result = data || 1;
// console.log(data);

// let datas = [];
// datas[0] = 10;
// datas[4] = 20;
// console.log(datas); //3칸이 비어있다고 나온다

// push(): 가장 마지막에 값 추가
// let datas = [20, 3, 5, 7, 1];
// // 마지막 열에 값 넣기
// datas.push(21);
// console.log(datas);

// // join(): 원하는 구분점을 문자열로 전달하여 각 요소를 구분한 뒤 문자열로 리턴
// console.log(datas.join(':'));

// slice(begin, end): 원하는 부분을  추출하기 위해 시작 인덱스(inclusive)와 마지막 인덱스(exclusive)를 전달
// slice(begin): begin부터 마지막 인덱스까지 추출
// console.log(datas.slice(0, 3)); //0,1,2 방
// console.log(datas.slice(3)); //3번방부터 마지막 방

// // indexOf(value): 값을 해당 Array에서 조회 후 인덱스 번호 리턴, 조회 실패 시 -1 리턴
// console.log('ABC'.indexOf('A'));
// console.log(datas.indexOf(21));

// split("구분점")하는 순간 array 타입 객체
// console.log('월화수목금토'.split(''));
// console.log('월화수목금토'.split('').push('일'));
// let weekOfDay = '월화수목금토'.split('');
// weekOfDay.push('일');
// console.log(weekOfDay);

let datas = [20, 3, 5, 7, 1];
// 마지막 열에 값 넣기
// datas.push(21);
// console.log(datas);

// forEach(callback): 반복문
// datas.forEach(function (data) {
//   console.log(data);
// });

datas.forEach((data) => console.log(data));

// datas.forEach((data, i, datas) => {
//   console.log(data, i, datas);
// });

//기존 값을 제곱으로 변경, Math.pow(값, 지수)
// 값을 하나씩 출력
datas.forEach((data) => console.log(Math.pow(data, 2)));
// list 형태로 출력
datas.forEach((data, i, datas) => (datas[i] = Math.pow(data, 2)));
console.log(datas);
// map(callback): 변경
