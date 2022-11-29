import styled from "styled-components";

export const Button = styled.button`
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
    font-family: inherit;
    padding: 0.3em 1em;
    font-weight: 900;
    font-size: 18px;
    border: 1px solid ${(props) => props.theme.border};
    border-radius: 0.4em;
    box-shadow: 0em 0.1em ${(props) => props.theme.border};
    cursor: pointer;
    transition: 0.1s ease-in-out;
    display: inline-block;

    &:hover{
        transform: translate(-0em, -0.05em);
        box-shadow: 0em 0.3em ${(props) => props.theme.border};
    }
    &:active{
        transform: translate(0em, 0.05em);
        box-shadow: 0em 0.05em ${(props) => props.theme.border};
    }
`