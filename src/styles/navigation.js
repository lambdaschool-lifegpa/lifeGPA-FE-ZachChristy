import styled from 'styled-components'


// ===== Nav =====
export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #2B2B2B;
  color: white;
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  height: 75px;
  font-size: .8rem;

  h1 {
    font-size: 1.5rem;
    border: 2px solid white;
    border-radius: 2px;
    padding: 10px;
  }

   a {
     color: white;
     text-decoration: none;
   }
`;

export const NavbarLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    margin: 0 20px;
    transition: all .3s ease;

    &:hover {
      transform: scale(1.1);
      color: #FFA223;
    }
  }
`;

export const NavbarRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Login = styled.div`
  margin: 0 20px;
  border: 1px solid white;
  border-radius: 2px;
  padding: 5px 10px;
  transition: all .3s ease;

  &:hover {
    transform: scale(1.1);
    color: #2B2B2B;
    background-color: white;
    font-weight: 500;
  }
`;

export const Register = styled.div`
  margin: 0 20px;
  border: 1px solid white;
  border-radius: 2px;
  padding: 5px 10px;
  transition: all .3s ease;

  &:hover {
    transform: scale(1.1);
    color: #2B2B2B;
    background-color: white;
    font-weight: 500;
  }
`;

export const UserNavInfoConatiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 75px;
  height: 75px;

  span {
    margin-left: 10px;
    cursor: pointer;

    &:hover {
      color: #FFA223;
    }
  }
`;

export const UserNavImg = styled.img`
  width: 30px;
  height: 30px;
  border: .02px solid white;
  border-radius: 50%;
  margin-left: 20px;
`;
