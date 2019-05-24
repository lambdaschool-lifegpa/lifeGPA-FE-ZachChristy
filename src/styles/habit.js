import styled from 'styled-components'

export const HabitContainer = styled.div`
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
`;

export const HabitCatContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;

  h4 {
    transition: all .3s ease;

    &:hover {
      transform: scale(1.1)
    }
  }

`;

export const EditDeleteContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

`;

export const Button = styled.div`
  width: 30%;
  margin: 20px 20px 10px 20px;
  border: 1px solid #2B2B2B;
  border-radius: 2px;
  padding: 5px 0;
  color: #2B2B2B;
  font-size: 1rem;
  font-weight: 500;
  transition: all .3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    color: white;
    background-color: #2B2B2B;
    font-weight: 500;

    a {
      color: white
    }
  }

`;
