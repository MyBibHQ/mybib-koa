import * as Router from "koa-router";
const router = new Router();

import Reference from "../../data/database/Reference";
import Db from "../../db";
import ReferenceFormatter from "../../services/csl/formatter/referenceFormatter";

router.prefix("/api/projects");

router.get("/:projectId/references", async (ctx, next) => {
  const accessToken = ctx.request.headers["access-token"];
  let styleId = "";

  const references = await new Promise<Reference[]>((resolve, reject) => {
    Db.all("SELECT [References].* FROM [References] INNER JOIN Projects ON [References].ProjectId = Projects.Id INNER JOIN Users ON Projects.UserId = Users.Id INNER JOIN AccessTokens ON Users.Id = AccessTokens.UserId WHERE AccessTokens.Token = $accessToken AND [References].ProjectId = $projectId", {
      $accessToken: accessToken,
      $projectId: ctx.params.projectId
    }, function (err, rows) {
      if (err) {
        reject();
        return;
      }

      Db.get("SELECT * FROM Projects WHERE Id = $id LIMIT 1", {
        $id: ctx.params.projectId
      }, function (err2, row) {
        if (err2) {
          reject();
          return;
        }

        styleId = row.StyleId;
        resolve(rows.map((r) => {
          return Object.assign(new Reference(), r);
        }));
      });
    });
  });

  const formattedProject = await ReferenceFormatter.formatReferences(references, styleId);

  ctx.body = {
    hasHangingIndent: formattedProject.HasHangingIndent,
    lineSpacing: formattedProject.LineSpacing,
    entrySpacing: formattedProject.EntrySpacing,
    titleAlign: formattedProject.TitleAlign,
    titleText: formattedProject.TitleText,
    titleSize: formattedProject.TitleSize,
    titleSpacing: formattedProject.TitleSpacing,
    references: formattedProject.FormattedReferences.map((f) => {
        return {
          id: f.Reference.Id,
          projectId: ctx.params.projectId,
          sourceId: f.Reference.SourceId,
          urlToImage: f.Reference.UrlToImage,
          formattedStr: f.BibliographyString,
          citations: f.CitationString ? [f.CitationString] : null, // ultimately this would return multiple citations
          metadata: JSON.parse(f.Reference.Json)
        };
    })
  };
});

router.post("/:projectId/references", async (ctx, next) => {
  const reference = await new Promise<Reference>((resolve, reject) => {
    const ref = new Reference();
    Db.run("INSERT INTO [References] (ProjectId, SourceId, UrlToImage, Json) VALUES ($projectId, $sourceId, $urlToImage, $json)", {
      $projectId: ctx.params.projectId,
      $sourceId: ctx.request.body.sourceId,
      $urlToImage: ctx.request.body.urlToImage,
      $json: JSON.stringify(ctx.request.body.metadata)
    }, function (err) {
      if (!err) {
        ref.Id = this.lastID;
        ref.ProjectId = ctx.params.projectId;
        ref.SourceId = ctx.request.body.sourceId;
        ref.Json = ctx.request.body.metadata;
        resolve(ref);
      } else {
        reject();
        return;
      }
    });
  });

  ctx.body = {
    reference: {
      id: reference.Id,
      projectId: reference.ProjectId,
      sourceId: reference.SourceId,
      urlToImage: reference.UrlToImage,
      metadata: reference.Json
    }
  };
});

router.put("/:projectId/references/:referenceId", async (ctx, next) => {
  const reference = await new Promise<Reference>((resolve, reject) => {
    const ref = new Reference();
    Db.run("UPDATE [References] SET SourceId = $sourceId, Json = $json WHERE Id = $id AND ProjectId = $projectId", {
      $id: ctx.params.referenceId,
      $projectId: ctx.params.projectId,
      $sourceId: ctx.request.body.sourceId,
      $json: JSON.stringify(ctx.request.body.metadata)
    }, function (err) {
      if (!err) {
        ref.Id = ctx.params.referenceId;
        ref.ProjectId = ctx.params.projectId;
        ref.SourceId = ctx.request.body.sourceId;
        ref.Json = ctx.request.body.metadata;
        resolve(ref);
      } else {
        reject();
      }
    });
  });

  ctx.body = {
    reference: {
      id: parseInt(reference.Id.toString(), 10),
      projectId: parseInt(reference.ProjectId.toString(), 10),
      sourceId: reference.SourceId,
      urlToImage: reference.UrlToImage,
      metadata: reference.Json
    }
  };
});

router.del("/:projectId/references/:referenceId", async (ctx, next) => {
  await new Promise<Reference>((resolve, reject) => {
    Db.run("DELETE FROM [References] WHERE Id = $id AND ProjectId = $projectId", {
      $id: ctx.params.referenceId,
      $projectId: ctx.params.projectId
    }, function (err) {
      if (!err) {
        resolve();
        return;
      } else {
        reject();
        return;
      }
    });
  });

  ctx.body = {};
});

export default router.routes();
