import * as Router from "koa-router";
const router = new Router();

router.prefix("/download");

router.get("/:projectId/docx", async (ctx, next) => {
  // redacted
  ctx.body = {
  };
});

export default router.routes();
