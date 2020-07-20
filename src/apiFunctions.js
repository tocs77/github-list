// This file contains functions for server api calls

import axios from './axios-instance';

export const getRepository = async (userName) => {
  let response = await axios.get(`/users/${userName}/repos`);
  return response;
};
