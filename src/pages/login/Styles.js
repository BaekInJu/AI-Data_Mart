import styled from "styled-components";

export const Wrapper = styled.div`
    display: inline-block;
    border:solid;
    width: 600px;
    border-width:1px;
    border-radius:20px;
    border-color: rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin: 50px;
`
export const Title = styled.h1`
    margin:0px;
`

export const Description = styled.div`
    margin-top:10px;
    margin-bottom : 30px;
    color: rgba(0, 0, 0, 0.6);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`

export const Id = styled.div`
    margin-bottom: 15px;
    display: inline-block;
`

export const InputId = styled.input`
    display: block;
    width: 290px;
    height: 30px;
    font-size: 25px;
`

export const Label = styled.h3`
    text-align: left;
    margin: 5px;
`;

export const Descriptions = styled.div`
    margin-top:5px;
    margin-bottom:30px;
    color: rgba(0, 0, 0, 0.6);
    font-family: verbana, Geneva, Tahoma, sans-serif;
`
export const Password = styled.div`
    display: inline-block;
`;
export const InputPW = styled.input.attrs({ type: 'password' })`
    display: block;
    width: 290px;
    height: 30px;
    font-size: 25px;
`;

export const SaveIdField = styled.div`
    margin-top:10px;
    text-align: left;
    margin-left: 150px;
`;

export const SaveIdLabel = styled.label`
display:inline;
`;

export const SaveCheckbox = styled.input.attrs({type: 'checkbox'})`

`;

export const LoginButton = styled.button`
    width: 300px;
    height: 50px;
    display: inline-blcok;
    background-color:  rgb(245, 123, 18);
    border-width: 0px;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    font-weight:bold;
    margin-top: 30px;
    transition: background 0.4s;
    &:hover{
        background-color:tomato;
    }
`

export const FindButton = styled.button`
    display: inline-block;
    background-color: white;
    border-width: 1px;
    border-color: rgba(0, 0, 0, 0.4);
    border-radius: 7px;
    width: 130px;
    height: 30px;
    margin: 10px;
    transition: background 0.3s;
    &:hover{
        background-color:wheat;
    }
`

export const FindField = styled.div`
    margin-top:10px;
    display: inline-block;
    align-content: space-between; 
`