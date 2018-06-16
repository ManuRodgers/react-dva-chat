import dva from "dva";
import router from "./router";
import { createLogger } from "redux-logger";
import userModel from "./models/userModel";

// ajax interception
import "./config";
import "../styles/less.less";

const app = dva({
  onAction: createLogger()
});

app.model(userModel);
app.router(router);

app.start("#app-container");
