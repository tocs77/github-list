const initilaState = {
  theme: 'light',
};

const reducer = (state = initilaState, action) => {
  if (action.type === 'CHANGE_THEME') {
    return { theme: action.theme };
  }
  return state;
};

export default reducer;
