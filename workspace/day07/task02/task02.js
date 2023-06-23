document.querySelector("#change").addEventListener("click", () => getResult(change)); //change 버튼이 click 이벤트가 발생하면 getResult함수에 change함수를 넣고 실행
function change(number){
    const numbering = document.querySelector("#round"); // 바꿀 round 숫자 1~4
    const p = document.querySelector("#result"); // 변경될 결과 p
    const hangle = "공일이삼사오육칠팔구";
    let result = ""; // result 초기화

    // endsWith(".") : .로 끝나는지 :  숫자의 형태가 아니면 round를 4로 바꾸고 숫자만 입력해달라고 출력
    if(isNaN(number)/*  || number[0] == "." */ || number.endsWith(".")){
        numbering.innerHTML = "4";
        p.innerHTML = "숫자만 입력해주세요.";
        return;
    }
    // 정상적일때 3
    numbering.innerHTML = "3";

    // includes는 해당 문자열이 포함되어있는지 확인 : 예를 들어, 3.0을 "삼점영"으로 출력하고자 한다면 아래의 방법을 사용
    if(number.includes(".")){
        numbering.innerHTML = "2";
    }

    // 예를 들어, 3.0을 "삼"으로 출력하고자 한다면 아래의 방법을 사용
    // if(parseFloat(number) - parseInt(number) != 0){

    // }else{
    //     number = parseInt(number);
    // }

    // for문에서 
    // in은 순서가 있는 컬렉션의 length만큼 인덱스를 가져올 수 있고,
    // of는 순서가 있는 컬렉션의 각 값을 가져올 수 있다.
    for(let i of number){
        // charAt()에 인덱스로 활용할 수 없는 값을 전달하면, 0번째 값을 가져온다.
        // console.log(hangle.charAt(i)); 와 같다 number의 요소들은 각 정수 i가 한글의 i번째 방의 값과 같기때문
        result += hangle[i]; 
    }

    result = result.replace("undefined", "점"); // .이 undefined가 나와서 점으로 교체

    if(result.startsWith("점")){ // 점으로 시작하면 0으로 바꿔줌
        result = "영" + result;
    } 
    if(result.charAt(result.length - 1) == "공") { //마지막 값이 0이면 
        // substring :시작, 추출하고자하는 문자열의 끝의 인덱스 영으로 바꾼다 
        result = result.substring(0, result.lastIndexOf("공")) + "영";
    }
    // 문자열중 0이 있으면 영으로 치환
    if(result.charAt(0) == "공") {// substring(1) = 1부터 마지막까지  공을 영   으로 
        result = "영" + result.substring(1);
    }
    p.innerHTML = result;
}

function getResult(callback){
    const input = document.querySelector("input[name=input]").value; //입력받은 input을 받아온다
    if(callback){   //callback이 있으면
        callback(input); // callback에 input을 전달
    }
}