let file = require('fs');
// 파일 쓰고 읽기
// file.writeFile('경로','내용','인코딩','콜백함수');

// file.writeFile('love.text','사랑해','utf-8',function(error){
//     if(error){
//         console.log(error);
//     }else{
//         console.log("성공");
//     }
// });

// // file.readFile('경로','인코딩','콜백함수');
file.readFile('love.text','utf-8',function(error,content){
    if(error){
        console.log(error);
    }else{
        console.log("성공");
    }
});