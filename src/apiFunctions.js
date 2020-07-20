// This file contains functions for server api calls

import axios from './axios-instance';



export const getRepository = async () => {
  let response = await axios.get(`/users/tocs77/repos`);
  return response.data;
};
