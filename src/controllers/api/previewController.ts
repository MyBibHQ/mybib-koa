import * as Router from "koa-router";
const router = new Router();

import Reference from "../../data/database/Reference";
import ReferenceFormatter from "../../services/csl/formatter/referenceFormatter";

router.prefix("/api");

router.post("/preview/single", async (ctx, next) => {
  let reference = new Reference();
  reference.Id = 0;
  reference.SourceId = ctx.request.query.sourceId;
  reference.Json = JSON.stringify(ctx.request.body);

  const formattedProject = await ReferenceFormatter.formatReferences([reference], ctx.request.query.styleId);

  const formattedPreviewStr = formattedProject.FormattedReferences[0].BibliographyString;

  ctx.body = {
    formattedStr: formattedPreviewStr
  };
});

export default router.routes();
