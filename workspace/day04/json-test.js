let user = { id: 'sts', pw: '1234', name: '송태섭' };
// 객체를 json 화 키값에 ""있으면 json 아님 객체
let userJSON = JSON.stringify(user);

console.log(userJSON);

user = JSON.parse(userJSON);
console.log(user);
