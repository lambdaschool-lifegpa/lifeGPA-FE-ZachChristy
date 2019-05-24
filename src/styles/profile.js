import styled from 'styled-components'

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 400px;
  width: 100%;
  height: auto;
  margin: 50px auto;
  padding: 20px;
  background-color: white;
  box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.27);
  -webkit-box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.27);
  -moz-box-shadow: 5px 5px 7px 0px rgba(0,0,0,0.27);

  a {
    text-decoration: none;
    color: black;
  }
`;

export const ProfileImage = styled.img`
 width: 100%;
 height: auto;
`;

export const UserInfo = styled.div`
  margin: 20px 0 0 10px;

  h2 {
    text-align: left;
  }
`;
