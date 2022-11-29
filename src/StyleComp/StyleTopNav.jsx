import styled from "styled-components";

export const Nav = styled.nav`
    background-color:${(props) => props.theme.background};
    color:${(props) => props.theme.text};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15vh;
`

export const ContNav = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 50vw;
        margin: 0 auto;
`

export const Title = styled.h4`
    font-size: 2rem;
`