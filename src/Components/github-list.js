import React, { Component } from 'react';
import styled from 'styled-components';

import RepositoryItem from './repository-item';
import Paginator from './paginator';
import * as apiFunctions from '../apiFunctions';
import { paginationParse } from '../pagination';

const Input = styled.input`
  font-size: 1.5rem;
  margin 1rem
`;
const Button = styled.button`
  font-size: 1.3rem;
  border: none;
  background: #404040;
  color: #ffffff;
  padding: 1rem;
  text-transform: uppercase;
  border-radius: 6px;
  display: inline-block;
  margin: 1rem 3rem;
  cursor: pointer;
`;

const Message = styled.p`
  font-size: 2rem;
`;

const List = styled.ul`
  list-style: none;
`;

const PaginationWrapper = styled.div`
  display: flex;
  padding 2rem;
`;

class GithubList extends Component {
  constructor() {
    super();
    this.state = {
      repoList: [],
      userName: '',
      message: '',
      paginationString: '',
      activePage: null,
    };
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
      this.findByUserHandler();
    }
  };

  async findByUserHandler() {
    try {
      const responce = await apiFunctions.getRepository(this.state.userName);
      this.setState({
        repoList: responce.data,
        paginationString: responce.headers.link,
        activePage: 1,
      });
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

  async findByLangHandler(lang) {
    try {
      const responce = await apiFunctions.getPopularByLang(lang);
      this.setState({
        repoList: responce.data.items,
        paginationString: responce.headers.link,
        activePage: 1,
      });
    } catch (err) {
      let message = 'Error occured during request';
      if (err.response.status === 404) {
        message = 'Unknown language';
      }
      this.setState({
        repoList: [],
        message: message,
      });
    }
  }

  async changePageHandler(e, link, number) {
    e.preventDefault();
    try {
      const responce = await apiFunctions.getAnotherPage(link + number);
      this.setState({
        repoList: responce.data.items || responce.data,
        activePage: number,
      });
    } catch (err) {
      let message = 'Error occured during request';
      this.setState({
        repoList: [],
        message: message,
        paginationString: '',
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

    const pagination = [];
    if (this.state.paginationString) {
      const res = paginationParse(this.state.paginationString);
      const { paginationLink, paginationLength } = res;

      for (let n = 1; n <= paginationLength; n++) {
        pagination.push(
          <Paginator
            link={paginationLink}
            number={n}
            key={n}
            activePage={this.state.activePage}
            clicked={(e) => this.changePageHandler(e, paginationLink, n)}
          />
        );
      }
    }

    return (
      <div>
        <Input
          onChange={(e) => this.inputChangedHandler(e)}
          onKeyPress={(e) => this.inputKeyPressHandler(e)}
        />
        <Button onClick={this.findByUserHandler.bind(this)}>
          Find repositories
        </Button>
        <Button onClick={this.findByLangHandler.bind(this, 'go')}>
          Popular Go repositories
        </Button>
        <Button onClick={this.findByLangHandler.bind(this, 'javascript')}>
          Popular JavaScript repositories
        </Button>
        <Message>{this.state.message}</Message>
        <PaginationWrapper>{pagination}</PaginationWrapper>
        <List>{repos}</List>
        <PaginationWrapper>{pagination}</PaginationWrapper>
      </div>
    );
  }
}

export default GithubList;
