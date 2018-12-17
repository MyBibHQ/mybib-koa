import * as Router from "koa-router";
const router = new Router();

router.prefix("/api/autocite");

router.get("/search", async (ctx, next) => {
  // autocite logic removed

  ctx.body = {
    status: "ok",
    results: []
  };
});

export default router.routes();
