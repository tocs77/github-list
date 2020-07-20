import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 1.1rem;
  background: ${(props) => (props.active ? 'blue' : 'white')};
  margin: 0.5rem;
  border: 1px solid black;
  max-width: 2rem;
  flex: 1 1 0px;
  text-align: center;
  a {
    color: ${(props) => (props.active ? 'white' : 'black')};
    text-decoration: none;
    margin: 0.5rem;
  }
`;

const paginator = (props) => {
  return (
    <Wrapper active={props.activePage === props.number}>
      <a href={props.link + props.number} onClick={props.clicked}>
        {props.number}
      </a>
    </Wrapper>
  );
};

export default paginator;
