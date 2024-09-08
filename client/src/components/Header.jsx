import styled from "styled-components";
import Login from "./Login";
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem 1rem 1rem;
  background-color: #282c34;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Left section for the logo
const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

// Logo image styling
const Logo = styled.img`
  width: 5rem;
  height: 4rem;
  margin-right: 1rem;
`;

// Title section is centered
const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  flex: 1;
  text-align: center;
`;

const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  return (
    <HeaderContainer>
      <LeftSection>
        <Logo src={`${process.env.PUBLIC_URL}/E.jpg`} alt="Logo" />
        <Title>E-comverse</Title>
      </LeftSection>
      <Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
    </HeaderContainer>
  );
};

export default Header;
