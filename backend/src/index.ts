import express, { Application } from "express";
import cors from "cors";
import notesRouter from "./routes/notes";

const app: Application = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/notes", notesRouter);

app.listen(port, "0.0.0.0", () => {
    console.log(`Server running`);
});
