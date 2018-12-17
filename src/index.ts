import * as path from "path";

import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import * as render from "koa-ejs";
// import * as json from "koa-json";
import * as logger from "koa-logger";
import * as Router from "koa-router";
import * as serve from "koa-static";

import CslStyleLibrary from "./services/csl/cslStyleLibrary";
CslStyleLibrary.LoadStyles("[path to CSL styles dir]");

import autociteController from "./controllers/api/autociteController";
import configController from "./controllers/api/configController";
import exportController from "./controllers/api/exportController";
import previewController from "./controllers/api/previewController";
import projectsController from "./controllers/api/projectsController";
import referencesController from "./controllers/api/referencesController";
import stylesController from "./controllers/api/stylesController";
import usersController from "./controllers/api/usersController";
import mainController from "./controllers/mainController";
import downloadController from "./controllers/downloadController";


const app = new Koa();

const router = new Router();

app.use(logger());
app.use(bodyParser());

render(app, {
  root: path.join(__dirname, "views")
});

router.use(mainController)
.use(downloadController)
.use(configController)
.use(exportController)
.use(stylesController)
.use(previewController)
.use(autociteController)
.use(usersController)
.use(projectsController)
.use(referencesController);

app.use(router.routes());
app.use(router.allowedMethods());

app.use(serve(path.join(__dirname, "static")));

app.listen(3000, () => {
  // tslint:disable-next-line:no-console
  console.log("Koa started...");
});
