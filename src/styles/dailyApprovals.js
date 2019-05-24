import styled from 'styled-components'

export const DAContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: white;
  box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.27);
  -webkit-box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.27);
  -moz-box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.27);
`;

export const CheckContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 10px 0;
  font-weight: 500;
`;

export const MarkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  height: auto;

  div {
    cursor: pointer;
    transition: all .3s ease;

    &:hover{
      transform: scale(1.1)
    }
  }
`;
