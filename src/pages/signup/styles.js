import styled from "styled-components";

export const UserTypeWrapper = styled.div`
`

export const Label = styled.h2`
    text-align: left;
`

export const Line = styled.hr`
    line: 1px;
    // margin-top:15px;
`

export const BorderLine = styled.hr`
    border-line: 2px;
    // margin-bottom: 25px;
`

export const InpUserTypeOption = styled.span`
    margin: 10px;
`

export const InpUserType = styled.input.attrs({type:'radio'})`

`

export const UserTypeLabels = styled.label`

`

export const UserInfoWrapper = styled.div`

`

export const EmailField = styled.div`
`

export const InpLabel = styled.h4`
    display: inline;
    margin-top: 6px;
`

export const InpEmail = styled.input.attrs({placeholder:"아이디(이메일)을 입력하세요."})`
    display: inline;
    width: 290px;
    height: 30px;
    font-size: 20px;
    margin: 20px;
`

export const CheckEmail = styled.button`
    width: 80px;
    height: 38px;
    display: inline-blcok;
    background-color:  rgb(245, 123, 18);
    border-width: 0px;
    border-radius: 10px;
    color: white;
    font-size: 15px;
    font-weight:bold;
    margin-top: 30px;
    transition: background 0.4s;
    &:hover{
        background-color:tomato;
    }
`

export const InpContainer = styled.div`
    margin-left: 36px;
    width: 527px;
    display: flex;
    justify-content: space-between;
    align-contents: center;
    margin-bottom: 5px;
`   

export const Inp = styled.input.attrs(props=>({
    type:props.type,
    placeholder:props.placeholder
}))`
    display: inline;
    width: 391px;
    height: 30px;
    font-size: 20px;
`

export const Serch = styled.img.attrs(props=>({
    src:props.src
}))`
    // position: relative;
    width: 30px;
    right: 30px;
`

export const ButtonsWrapper = styled.div`
    display:flex;
    justify-content: end;
    margin-right: 20px;
`

export const JoinButton = styled.button`
    width: 100px;
    height: 50px;
    margin: 15px;
    font-size: 20px;
    border-radius: 10px;
    border-width: 0;
    color: white;
    background-color:  rgb(245, 123, 18);
    transition: background 0.4s;
    &:hover{
        background-color:tomato;
    }
`

export const CancelButton = styled.button`
    width: 100px;
    height: 50px;
    margin: 15px;
    font-size: 20px;
    border-radius: 10px;
    border-color: rgba(0, 0, 0, 0.5);
    color: rgba(0, 0, 0, 0.5);
    border-width: 2;
    background-color: white;
    transition: background 0.4s;
    transition: color: 0.4s;
    &:hover{
        background-color: rgba(0, 0, 0, 0.7);
        color: white;
        border-color: rgba(0, 0, 0, 0.7);
    }
`