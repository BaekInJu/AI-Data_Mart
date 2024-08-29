export const  AllSelectionButtonFunc = (event, list, setList, of) => {  //props.event  props.list   props.setList

    const temp = [];
    if(of === "year" || of === "month"){   //년, 월별 로직은 살짝 다르기 때문에 조건으로 구분
        //년, 월은 뒤에 문자열을 자르고 넘겨줘야 함(예: 2022년 -> 2022)
        if(event.target.checked){
            for(let i = 0; i < list.length; i++){//선택 가능한 리스트의 항목 만큼 반복을 돌며 하나씩 삽입
                temp.push(list[i].slice(0, list[i].length -1));    //맨 뒤 한글 문자열 슬라이스
                document.getElementById(`${of} : ${list[i]}`).checked = true;   //체크박스 체크표시
            }
            setList(temp);  //데이터 선택된 리스트 
        }else{
            for(let i = 0; i < list.length; i++){
                document.getElementById(`${of} : ${list[i]}`).checked = false;
            }
            setList([]);
        }
        return;
    }
    if(event.target.checked){
        for(let i = 0; i < list.length; i++){
            temp.push(list[i]);
            document.getElementById(`${of} : ${list[i]}`).checked = true;
        }
        setList(temp);
    }else{
        for(let i = 0; i < list.length; i++){
            document.getElementById(`${of} : ${list[i]}`).checked = false;
        }
        setList([]);
    }
}