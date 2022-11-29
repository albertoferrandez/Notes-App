import styled from "styled-components";


export const MainNotes = styled.main`
display:flex;
justify-content: center;
align-items: baseline;
height: 70vh;
background-color:${(props) => props.theme.background}
`

export const Container = styled.div`
max-width: 80vw;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-gap: 1rem;
`

export const Note = styled.div`
background-color: ${(props) => props.theme.background};
color: ${(props) => props.theme.text};
padding: 0.2rem;
min-width: 300px;
height: auto;
border: 1px solid ${(props) => props.theme.border};
border-radius: 0.4em;
box-shadow: 0em 0.1em ${(props) => props.theme.border};
transition: 0.1s ease-in-out;

&:hover{
    transform: translate(-0em, -0.05em);
    box-shadow: 0em 0.3em ${(props) => props.theme.border};
}
&:active{
    transform: translate(0em, 0.05em);
    box-shadow: 0em 0.05em ${(props) => props.theme.border};
}
`

export const NoteTitle = styled.h3`
    padding: 15px 7px;
`

export const NoteDescription = styled.p`
    margin: 20px 7px;
`