import styled from "styled-components";

export const Wrapper = styled.div`
    display: inline-block;
    width:500px;
    border:solid;
    width: 300px;
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
    margin-top:5px;
    margin-bottom : 30px;
    color: rgba(0, 0, 0, 0.6);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`

export const Id = styled.div`
    margin-bottom: 15px;
`

export const InputId = styled.input`
    display: block;
    height: 30px;
    font-size: 25px;
`


export const Label = styled.h3`
    text-align: left;
    margin: 5px;
`;

export const Password = styled.div`
    
`;
export const InputPW = styled.input.attrs({ type: 'password' })`
    display: block;
    height: 30px;
    font-size: 25px;
`;

export const SaveIdField = styled.div`
    text-align: left;
`;

export const SaveIdLabel = styled.label`
    display:inline;
`;

export const SaveCheckbox = styled.input.attrs({type: 'checkbox'})`

`;

export const LoginButton = styled.button`
    display: inline-block;
`

export const FindButton = styled.button`
    display: inline-block;
`