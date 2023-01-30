import { Request, Response } from "express";

import express from "express";
const app = express();
const port = 9000;

app.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
  });
});

app.on("data", (data) => {
  console.log(data);
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
