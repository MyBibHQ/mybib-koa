import * as Router from "koa-router";
import Project from "../../data/database/Project";
import User from "../../data/database/User";
import Db from "../../db";
import CslStyleLibrary from "../../services/csl/cslStyleLibrary";
const router = new Router();

router.prefix("/api");

router.get("/projects", async (ctx, next) => {
  const accessToken = ctx.request.headers["access-token"];

  const projects = await new Promise<Project[]>((resolve, reject) => {
    Db.all("SELECT Projects.* FROM Projects INNER JOIN Users ON Projects.UserId = Users.Id INNER JOIN AccessTokens ON Users.Id = AccessTokens.UserId WHERE AccessTokens.Token = $accessToken AND Projects.DeletedAt IS NULL ORDER BY Projects.[Order]", {
      $accessToken: accessToken
    }, function (err, rows) {
      if (err) {
        reject();
        return;
      }

      resolve(rows.map((row) => {
        return Object.assign(new Project(), row);
      }));
    });
  });

  ctx.body = {
    projects: projects.map((p) => {
      return {
        id: p.Id,
        title: p.Title,
        styleId: p.StyleId,
        styleName: CslStyleLibrary.Styles[p.StyleId].Name,
        styleFormat: "",
        folderName: p.FolderName
      };
    })
  };
});

router.post("/projects", async (ctx, next) => {
  const accessToken = ctx.request.headers["access-token"];

  const user = await new Promise<User>((resolve, reject) => {
    Db.get("SELECT Users.* FROM Users INNER JOIN AccessTokens ON Users.Id = AccessTokens.UserId WHERE AccessTokens.Token = $accessToken", {
      $accessToken: accessToken
    }, function (err, row) {
      if (err) {
        reject();
        return;
      }

      resolve(row);
    });
  });

  let newProject = new Project();
  newProject.UserId = user.Id;
  newProject.Title = ctx.request.body.title;

  await new Promise<Project>((resolve, reject) => {
    Db.run("INSERT INTO Projects (UserId, Title, StyleId, [Order]) VALUES ($userId, $title, $styleId, $order)", {
      $userId: newProject.UserId,
      $title: newProject.Title,
      $styleId: newProject.StyleId,
      $order: newProject.Order
    }, function (err) {
      if (err) {
        reject();
        return;
      }

      newProject.Id = this.lastID;
      resolve(newProject);
    });
  });

  ctx.body = {
    project: {
      id: newProject.Id,
      styleId: newProject.StyleId,
      title: newProject.Title
    }
  };
});

router.put("/projects/:id", async (ctx, next) => {
  await new Promise<Project>((resolve, reject) => {
    Db.run("UPDATE Projects SET Title = $title, StyleId = $styleId WHERE Id = $id", {
      $title: ctx.request.body.title,
      $styleId: ctx.request.body.styleId,
      $id: ctx.params.id
    }, function (err) {
      if (err) {
        reject();
        return;
      }
      resolve();
    });
  });

  ctx.body = {
    project: {
      id: ctx.params.id,
      title: ctx.request.body.title,
      styleId: ctx.request.body.styleId
    }
  };
});

router.del("/projects/:id", async (ctx, next) => {
  await new Promise((resolve, reject) => {
    Db.run("UPDATE Projects SET DeletedAt = $deletedAt WHERE Id = $id", {
      $deletedAt: new Date().toDateString(),
      $id: ctx.params.id
    }, function (err) {
      if (err) {
        reject();
      } else {
        resolve();
      }
    });
  });

  ctx.body = {};
});

export default router.routes();
