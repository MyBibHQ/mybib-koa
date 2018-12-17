import * as Router from "koa-router";
const router = new Router();

router.prefix("/api/export");

router.get("/:projectId/google-drive", async (ctx, next) => {
  // redacted
  ctx.body = {
    status: "ok",
    name: "File name"
  };
});

export default router.routes();
