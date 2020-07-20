import React from 'react';

import * as style from './github-list.style';

import * as apiFunctions from '../apiFunctions';

const gihubList = () => {
  async function f() {
    const res = await apiFunctions.getRepository();
    console.log(res);
  }

  f();
  return (
    <style.ListComponent>
      <div>
        <h3>Github List</h3>
      </div>
    </style.ListComponent>
  );
};

export default gihubList;
