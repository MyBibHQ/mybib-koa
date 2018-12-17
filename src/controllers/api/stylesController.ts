import * as Router from "koa-router";
const router = new Router();

import CslStyleLibrary from "../../services/csl/cslStyleLibrary";

router.prefix("/api/styles");

router.get("/search", async (ctx, next) => {
  let q = ctx.request.query["q"];

  let cslStyles = CslStyleLibrary.Search(q);
  cslStyles = cslStyles.length > 99 ? cslStyles.slice(0, 100) : cslStyles;

  ctx.body = {
    styles: cslStyles.map((s) => {
      return {
        id: s.Id,
        name: s.Name,
        shortName: s.ShortName,
        isPopular: s.IsPopular
      };
    })
  };
});

export default router.routes();
