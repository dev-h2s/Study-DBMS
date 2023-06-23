function Passenger(name, age, Level){
    this.name = name;
    this.age=  age;
    this.Level=Level;
}

let hong = new Passenger("홍길동",20,1);
let lee = new Passenger("이순신",19,2);
let jang = new Passenger("장보고",25,3);

let train = new Array(hong,lee,jang);
let TrainJSON = JSON.stringify(train);
console.log(TrainJSON);