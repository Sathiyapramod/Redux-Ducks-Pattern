// Actions
export const USERNAME = 'auth/username';
export const PASSWORD = 'auth/password';

// Actions Type
export const FetchUsername = (payload) => {
  return { type: USERNAME, payload };
};
export const FetchPassword = (payload) => {
  return { type: PASSWORD, payload };
};

// Initial state
const initialState = {
  username: '',
  password: '',
};

// Reducer functions
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case USERNAME:
      return { ...state, username: action.payload };
    case PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
}
