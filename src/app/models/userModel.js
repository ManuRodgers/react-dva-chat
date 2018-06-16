import axios from "axios";
export default {
  namespace: "user",

  state: {
    username: "manu",
    pwd: "",
    pwdAgain: "",
    isAuth: false,
    msg: "",
    kind: "genius"
  },

  reducers: {
    login(state, action) {
      return { ...state, isAuth: true };
    },
    logout(state, action) {
      return { ...state, isAuth: false };
    },
    changeKeyValuePair(state, action) {
      return { ...state, [action.keyValue]: action.value };
    },
    getInitDataSync(state, action) {}
  },
  effects: {
    *getInitDataAsync() {
      const { status, data } = yield axios.get("/user/info");
      console.log(data);
      console.log(status);
    }
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // eslint-disable-line
      history.listen(location => {
        console.log(1, location);
      });
    }
  }
};
