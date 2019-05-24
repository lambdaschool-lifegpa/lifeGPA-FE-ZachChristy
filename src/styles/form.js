import styled from 'styled-components'

// ===== Form =====
export const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 20px;
    background-color: white;
    box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.27);
    -webkit-box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.27);
    -moz-box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.27);
  }

  input {
    width: 100%;
    height: 50px;
    border: none;
    border-bottom: 1px solid #D4D4D4;
    margin: 5px auto;
    padding: 5px 5px 0 5px;
    outline: none;
    font-size: 1.2rem;
  }

  button {
    width: 100%;
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
      transform: scale(1.02);
      color: white;
      background-color: #2B2B2B;
      font-weight: 500;
    }
  }

  p {
    width: 100%;
    cursor: pointer;
    transition: all .3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
