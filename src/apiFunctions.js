// This file contains functions for server api calls

import axios from './axios-instance';

export const getRepository = async (userName) => {
  let response = await axios.get(`/users/${userName}/repos`);
  return response;
};

export const getPopularByLang = async (lang) => {
  let response = await axios.get(
    `/search/repositories?q=stars:>=10+language:${lang}&sort=stars&order=desc`
  );
  return response;
};

export const getAnotherPage = async (link) => {
  let response = await axios.get(link);
  return response;
};
