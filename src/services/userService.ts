import AccessToken from "../data/database/AccessToken";
import Project from "../data/database/Project";
import User from "../data/database/User";
import Db from "../db";

class UserService {
  public async CreateUser(): Promise<User> {
    let promise = new Promise<User>((resolve, reject) => {
      Db.run("INSERT INTO Users DEFAULT VALUES", function (err) {
        if (!err) {
          const user = new User();
          user.Id = this.lastID;

          const project = new Project();
          project.UserId = user.Id;
          project.Title = "My first project";
          Db.run("INSERT INTO Projects (UserId, Title, StyleId, [Order]) VALUES ($userId, $title, $styleId, $order)", {
            $userId: project.UserId,
            $title: project.Title,
            $styleId: project.StyleId,
            $order: project.Order
          }, function (err2) {
            if (!err2) {
              project.Id = this.lastID;
              resolve(user);
            } else {
              reject();
            }
          });
        } else {
          reject();
        }
      });
    });

    return await promise;
  }

  public async CreateAccessToken(userId: number): Promise<AccessToken> {
    if (!userId || userId === 0) {
      throw new Error("No id was provided. Has the user been added to the DB first?");
    }

    const accessToken = new AccessToken();
    accessToken.UserId = userId;

    let promise = new Promise<AccessToken>((resolve, reject) => {
      Db.run("INSERT INTO AccessTokens (UserId, Token) VALUES ($userId, $token)", {
        $userId: accessToken.UserId,
        $token: accessToken.Token
      }, function (err) {
        if (!err) {
          accessToken.Id = this.lastID;
          resolve(accessToken);
        } else {
          reject();
        }
      });
    });

    return await promise;
  }
}

const singleton = new UserService();
export default singleton;
