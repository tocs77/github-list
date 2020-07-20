import React, { Component } from 'react';
import styled from 'styled-components';

import RepositoryItem from './repository-item';
import * as apiFunctions from '../apiFunctions';

const Input = styled.input`
  font-size: 1.5rem;
  margin 1rem
`;
const Button = styled.button`
  font-size: 1.5rem;
`;

const Message = styled.p`
  font-size: 2rem;
`;

const List = styled.ul`
  list-style: none;
`;

class GithubList extends Component {
  constructor() {
    super();
    this.state = { repoList: [], userName: '', message: '' };
  }

  componentDidMount() {
    this.setState({
      message:
        this.state.repoList.length === 0
          ? 'Enter user name to show repositories'
          : '',
    });
  }

  inputChangedHandler = (e) => {
    this.setState({ userName: e.target.value });
  };

  inputKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      this.findHandler();
    }
  };

  async findHandler() {
    try {
      const responce = await apiFunctions.getRepository(this.state.userName);
      this.setState({ repoList: responce.data });
    } catch (err) {
      let message = 'Error occured during request';
      if (err.response.status === 404) {
        message = 'Unknown user name';
      }
      this.setState({
        repoList: [],
        message: message,
      });
    }
  }

  render() {
    let repos = [];
    if (this.state.repoList.lenght !== 0) {
      repos = this.state.repoList.map((repo) => {
        return (
          <li key={repo.id}>
            <RepositoryItem repo={repo} />{' '}
          </li>
        );
      });
    }

    return (
      <div>
        <Input
          onChange={(e) => this.inputChangedHandler(e)}
          onKeyPress={(e) => this.inputKeyPressHandler(e)}
        />
        <Button onClick={this.findHandler.bind(this)}>Find repositories</Button>
        <Message>{this.state.message}</Message>
        <List>{repos}</List>
      </div>
    );
  }
}

export default GithubList;
