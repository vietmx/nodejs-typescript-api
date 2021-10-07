import { RoutesConfig } from "./routes.config";
import express, { request } from "express";
import fetch from "node-fetch";

let data: Object[] = [];

export class ApiRoutes extends RoutesConfig {
  constructor(app: express.Application) {
    super(app, "ApiRoutes");
  }

  config() {
    this.app
      .route("/api")
      .get((req: express.Request, res: express.Response) => {
        res.send(`GET Request successful!`);
      });
    this.app
      .route("/api/:id")
      .get((req: express.Request, res: express.Response) => {
        res.send(
          `GET Request successful. Parameter passed is: ${req.params.id}`
        );
      });
    this.app
      .route("/api/post")
      .post((req: express.Request, res: express.Response) => {
        let putData = {
          id: req.body.id,
          time: new Date(),
        };
        data.push(putData);
        console.log(data);
        res.json(putData);
      });
    return this.app;
  }
}

// curl --request POST -H "Content-Type: application/json" -d '{"id": "5"}' localhost:3000/api/post
