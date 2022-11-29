import styled from "styled-components";

export const Footers = styled.footer`
position: absolute;
bottom: 0;
width: 100%;
background-color: ${(props) => props.theme.background};
color: ${(props) => props.theme.text};
height: 15vh
    `

export const ContFooter = styled.div`
display: flex;
align-content: center;
align-items: center;
justify-content: center;
height: 100%;
}
`