import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const ModalForm = styled.div`
  position: fixed; 
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; g
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4); 
`

export const Form = styled.form`
    position: absolute;
    float: left;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background:${(props) => props.theme.background};
    color: ${(props) => props.theme.text}
    border: 1px solid #888;
    border-radius: 5px;
    width: 50vw;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    animation: ${fadeIn} 0.5s linear;

`

export const FormHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

        & > input{
            
        }
`

export const Input = styled.input`
            width: 100vw;
            padding: 0.5rem 1rem;
            border: none;
            background: transparent;
            color: ${(props) => props.theme.text};
            &:focus{
                outline: none;
            }
`

export const Textarea = styled.textarea`
        width: 100%;
        resize: none;
        border: none;
        padding: 0.5rem 1rem;
        background: transparent;
        color: ${(props) => props.theme.text};
        box-sizing:border-box;
        &:focus{
            outline: none;
        } 
`

