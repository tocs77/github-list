import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 3rem;
  margin: 0rem 4rem;
`;

const HeaderContainer = styled.header`
  background-image: radial-gradient(
    circle 993px at 0.5% 50.5%,
    rgba(137, 171, 245, 0.37) 0%,
    rgba(245, 247, 252, 1) 100.2%
  );
  display: flex;
  min-height: 15vh;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Github Repositories List</Title>
      <Title>Created by Ilya Golubkov</Title>
    </HeaderContainer>
  );
};

export default Header;
