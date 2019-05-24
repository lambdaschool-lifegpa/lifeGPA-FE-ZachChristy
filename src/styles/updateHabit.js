import styled from 'styled-components'

export const UpdateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: auto;

  form {
    margin-left: -20px;
  }

  a {
    text-decoration: none;
    color: black;
  }

`;

export const PickerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  height: auto;
  max-width: 1200px;
  width: 100%;

`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: auto;
  max-width: 400px;
  width: 100%;
`;

export const CatTitleContainer = styled.div`
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

export const CatTitleSelectorContainer = styled.div`
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

  h4 {
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
      tansform: scale(1.1)
    }
  }
`;
