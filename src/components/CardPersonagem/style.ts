import styled from "styled-components";

export const Container = styled.div`
    width: 40rem;
    height: 20rem;
    display: flex;
    overflow: hidden;
    background: rgb(60, 62, 68);
    border-radius: 0.5rem;
    margin: 0.75rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  .content {
    flex: 3 1 0%;
    position: relative;
    padding: 0.75rem;
    color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
  }
  .content-info:first-child {
    -webkit-box-pack: start;
    justify-content: flex-start;
    a{
      font-size: 2rem;
    }
  }
  
  .content-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
  }
  .status-gray{
    display: flex;
    align-items: center; 
    color: rgb(158, 158, 158);   
  }
  .status{
    display: flex;
    align-items: center;    
  }
  .status-icon-Alive{
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    background: rgb(85, 204, 68);
    border-radius: 50%;
  }
  .status-icon-Dead{
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    background: rgb(255, 64, 64);
    border-radius: 50%;
  }
  .status-icon-unknown{
    height: 0.5rem;
    width: 0.5rem;
    margin-right: 0.375rem;
    background: rgb(158, 158, 158);
    border-radius: 50%;
  }
`