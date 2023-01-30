import { Request, Response } from "express";

const express = require("express");
const app = express();
const port = 9000;

app.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
  });
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${process.env.PORT}`);
});
