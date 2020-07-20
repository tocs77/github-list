import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 1.6rem;
  border-bottom: 1px solid black;
  padding: 1rem;
  color: black;

  a {
    text-decoration: none;
  }
`;

const repositoryItem = (props) => {
  return (
    <Wrapper>
      <p>Repository name: {props.repo.name}</p>
      <a href={props.repo.html_url}>{props.repo.html_url}</a>
    </Wrapper>
  );
};

export default repositoryItem;
