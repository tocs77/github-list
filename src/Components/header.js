import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Switch from './switch/switch';

const Title = styled.div`
  font-size: 3rem;
  margin: 0rem 4rem;
`;

const Label = styled.p`
  font-size: 1.5rem;
  margin: 0rem 1rem;
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

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = (props) => {
  const changedHandler = (e) => {
    if (e.target.checked) {
      props.onChangeTheme('dark');
      return;
    }
    props.onChangeTheme('light');
  };

  return (
    <HeaderContainer>
      <Title>Github Repositories List</Title>
      <Title>Created by Ilya Golubkov</Title>
      <FlexContainer>
        <Label>Dark theme</Label>
        <Switch changed={(e) => changedHandler(e)} />
      </FlexContainer>
    </HeaderContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeTheme: (theme) => dispatch({ type: 'CHANGE_THEME', theme: theme }),
  };
};

export default connect(null, mapDispatchToProps)(Header);
