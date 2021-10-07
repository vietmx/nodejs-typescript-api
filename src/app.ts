import express from "express";
import * as http from "http";
import { RoutesConfig } from "./routes.config";
import { ApiRoutes } from "./apiRoutes";

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
const routes: Array<RoutesConfig> = [];

app.use(express.json());

routes.push(new ApiRoutes(app));

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send(`Server is running!`);
});

server.listen(port, () => {
  console.log(`Server running locally at port: ${port}`);
});
