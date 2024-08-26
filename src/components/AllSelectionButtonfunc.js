export const  AllSelectionButtonFunc = (event, list, setList, of) => {  //props.event  props.list   props.setList
    console.log("클릭스");
    console.log(event.target.checked);
    const temp = [];
    if(of === "year" || of === "month"){
        if(event.target.checked){
            for(let i = 0; i < list.length; i++){
                temp.push(list[i].slice(0, list[i].length -1));
                document.getElementById(`${of} : ${list[i]}`).checked = true;
            }
            setList(temp);
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