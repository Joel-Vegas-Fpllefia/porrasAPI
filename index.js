import express from "express";
import "dotenv/config";
import router from "./routes/porrasRouter.js";

const app = express();
const PORT = process.env.PORT;

app.use("/api/porras", router);

app.listen(PORT, () => {
  console.log("HOLA MUNDO");
});
