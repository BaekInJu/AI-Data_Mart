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
    // margin-bottom: 15px;
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
`

export const InpEmail = styled.input`
    display: inline;
    width: 290px;
    height: 30px;
    font-size: 20px;
    margin: 20px;
`

export const CheckEmail = styled.button`
    width: 80px;
    height: 40px;
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

export const PasswordField = styled.div`
`

export const InpContainer = styled.div`
    display: flex;
    align-content: space-between;
`

export const InpPassword = styled.input.attrs({type:'password'})`
`