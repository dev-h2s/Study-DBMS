/* 
    task01.html
 */
    // getElementById(해당 ID,NAME등을 받아온다)
    // querySelector (첫번째 요소를 받아온다)
    function confirm(){
        // input과 tr들을 받아준다
        const input = document.querySelector("#input");
        const trs = document.querySelectorAll("tbody tr");
        let check = false; //잘못 입력했을시
    
        // 기존에 찾은 값들은 다음 찾을때 원상 복구
        // 두번째 눌렀을때 부터 값이 있을때 흰색, 별 빼주기
        if(globalThis.temp){
            globalThis.temp.style.background = "#fff";
            globalThis.temp.firstElementChild.innerHTML = globalThis.temp.firstElementChild.innerHTML.replace("★", "");
        }
    
        trs.forEach(tr => {
            let td = tr.firstElementChild;
            if(input.value == td.innerHTML){
                // check = true; if 문을 들어왓으면 ture로 갱신
                check = true;
                globalThis.temp = tr; 
                // 버튼을 누르면 tr의 자식요소에 색바꾸고 ★ 표시
                tr.style.background = "#ef5350";
                td.innerHTML = "★" + td.innerHTML;
            }
        })
    
        // for(let i=0; i<trs.length; i++){
            //    
        //     let td = trs[i].firstElementChild;
        //     if(input.value == td.innerHTML){
        //         check = true;
        //         globalThis.temp = trs[i];
        //         trs[i].style.background = "#ef5350";
        //         td.innerHTML = "★" + td.innerHTML;
        //     }
        // }
    
        if(!check) {// input.value != td.innerHTML 경우 check가 true가 되지않아서 해당 문구 실행
            alert("다시 시도해주세요."); 
        }
    }