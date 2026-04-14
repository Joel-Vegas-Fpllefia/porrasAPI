import express from "express";
import "dotenv/config";
import router from "./routes/porrasRouter.js";
import "cors";

const app = express();
app.use(cors());
const PORT = process.env.PORT;

app.use("/api/porras", router);

app.listen(PORT, () => {
  console.log("HOLA MUNDO");
});
