// 상품명, 가격, 재고를 프로퍼티로 담고 있는 Object를 3개 선언한다.
// 3개의 Onject를 1개의 AARay 객체에 모두 담는다.
// JSON으로 변경시킨다.
function Product (name, price, count){
    this.name = name;
    this.price = price;
    this.count = count;
}


let product1 = new Product("새우깡",1000 ,3);
let product2 = new Product("맛동산",2000,4);
let product3 = new Product("자갈치",1500,2);


let productInpormation = new Array(product1,product2,product3);
let productInpormationJSON = JSON.stringify(productInpormation);
console.log(productInpormation);
console.log(productInpormationJSON);

