import * as Router from "koa-router";
const router = new Router();

import Sources from "./../../data/sources";

router.prefix("/api");

router.get("/config", async (ctx, next) => {
  ctx.body = {
    sources: Sources.All
  };
});

export default router.routes();
