import bodyParser from "body-parser";
import cors from "cors";

const middleware = (app: any) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(
      cors({
        origin: "*",
        methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
      })
    );
  }

  export default middleware