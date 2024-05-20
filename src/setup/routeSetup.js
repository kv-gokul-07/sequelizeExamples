import authRouter from "src/routes/authRouter";
import homeRouterConfig from "src/routes/homeRouter";

export default function (app) {
    //Global route for path not found
    // app.use('*', (request: any, response: any, net: any) => {
    //     response.status(404).json({
    //         status: "Failed",
    //         message: "Route not found"
    //     })
    // })
    app.use('/api/v1', homeRouterConfig);
    app.use('/api/v1', authRouter);
}
