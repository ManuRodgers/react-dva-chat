export default {
  namespace: "user",

  state: {
    username: "manu",
    isAuth: false
  },

  reducers: {
    login(state, action) {
      return { ...state, isAuth: true };
    },
    logout(state, action) {
      return { ...state, isAuth: false };
    }
  },
  effects: {},

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
      history.listen(location => {
        console.log(1, location);
      });
    }
  }
};
