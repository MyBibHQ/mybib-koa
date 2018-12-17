import * as Router from "koa-router";
import * as send from "koa-send";
const router = new Router();

router.get("/", async (ctx, next) => {
  // return the ui app
  await send(ctx, "static/apps/desktop-app/index.html", { root: __dirname + "/../" });
});

export default router.routes();
