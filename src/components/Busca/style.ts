import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex: column;
    align-items: center;
    justify-content: center; 
    margin: 3rem;
    
    input{
      width: 20%;
      border: 2px solid green;
      border-radius: 8px;
      padding: 10px 15px;
      &:focus {
        outline: none;
      }
    }
`