// 1~10까지 Array객체에 담은 후 짝수만 출력
// let numbers = new Array(10).fill(0);
// numbers.forEach((number,i,numbers) => (numbers[i]= i+1));
// console.log(numbers);
// numbers.filter(function(number){return number % 2==0;}).forEach((number) => console.log(number));
// numbers.filter(function (number) {return number % 2 == 0;}).forEach(function (number) {console.log(number);});

// 한글을 정수로 변경
// let hangle = "공일이삼사오육칠팔구";
// let target = "일공이사";
// let result = "";
// console.log(Array.from(hangle));
// console.log(hangle.split(""));
// target.split("").map(char => hangle.indexOf(char)).forEach(i => result += i);
// console.log(parseInt(result));

// 정수를 한글로 변경
// let hangel = "공일이삼사오육칠팔구";
// let number = "1024";
// let result = "";
// Array.from(number).map(i => hangel[i]).forEach(char => result += char);
// console.log(result);

// 1~100까지 합 출력
let numbers = new Array(100).fill(0);
// numbers.forEach((number, i, numbers) => numbers[i] = i + 1);
numbers = numbers.map((number, i) => i + 1);
console.log(numbers);

let result = numbers.reduce((v, number) => v + number);
console.log(result);

// let datas = new Array("A", "B", "C");
// let result = datas.reduce((v, data) => v + data);
// console.log(result);
// console.log(datas.join(""));