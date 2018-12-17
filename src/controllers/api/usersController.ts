import * as Router from "koa-router";
const router = new Router();

import User from "../../data/database/User";
import Db from "../../db";
import UserService from "../../services/userService";

router.prefix("/api");

router.get("/users/me", async (ctx, next) => {
  const accessToken = ctx.request.headers["access-token"];
  if (!accessToken) {
    ctx.response.status = 401;
    return;
  }

  const promise = new Promise<User>((resolve, reject) => {
    Db.get("SELECT Users.* FROM Users INNER JOIN AccessTokens ON Users.Id = AccessTokens.UserId WHERE AccessTokens.Token = $accessToken LIMIT 1",
    {
      $accessToken: accessToken
    }, function (err, row) {
      if (err) {
        reject();
        return;
      }
      resolve(Object.assign(new User(), row));
    });
  });

  const user = await promise;
  if (!user) {
    ctx.response.status = 401;
    return;
  }

  ctx.body = {
    user: {
      id: user.Id,
      email: user.Email,
      firstName: user.FirstName,
      hasRegistered: user.HasRegistered
    }
  };
});

router.post("/users/create", async (ctx, next) => {
  let user = await UserService.CreateUser();
  let accessToken = await UserService.CreateAccessToken(user.Id);
  ctx.body = {
    accessToken: accessToken.Token,
    user: {
      id: user.Id,
      email: user.Email,
      firstName: user.FirstName,
      hasRegistered: user.HasRegistered
    }
  };
});

export default router.routes();
