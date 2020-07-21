import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 1.6rem;
  border-bottom: 1px solid;
  border-color: ${(props) => (props.theme === 'light' ? 'black' : 'white')};
  padding: 1rem;
  color: ${(props) => (props.theme === 'light' ? 'black' : 'white')};

  a {
    text-decoration: none;
    color: ${(props) => (props.theme === 'light' ? 'darkblue' : '#00BFFF')};
  }
`;

const repositoryItem = (props) => {
  return (
    <Wrapper theme={props.theme}>
      <p>Repository name: {props.repo.name}</p>
      <a href={props.repo.html_url} theme={props.theme}>
        {props.repo.html_url}
      </a>
    </Wrapper>
  );
};

export default repositoryItem;
