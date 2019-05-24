import styled from 'styled-components'

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 400px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 10px 20px;
  background-color: white;
  box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.27);
  -webkit-box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.27);
  -moz-box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.27);

  a {
    text-decoration: none;
    color: black;
  }

  p {
    cursor: pointer;
    padding: 5px 20px;
    color: #2B2B2B;
    border: 1px solid #2B2B2B;
    border-radius: 5px;
    font-weight: 500;
    transition: all .3s ease;

    &:hover {
      background-color: #2B2B2B;
      color: white;
      transform: scale(1.1)
    }
  }
`;

export const ViewHabit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;

  h4, i {
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
      transform: scale(1.1)
    }
  }

`;
