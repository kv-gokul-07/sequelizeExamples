
import express from "express"
import route from "./setup/routeSetup";
// import middleware from "./middleware/middleware";
let dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// middleware(app);
route(app);

app.listen(PORT, () => {
    return console.log(`APP is listening at http://localhost:${PORT}`);
})