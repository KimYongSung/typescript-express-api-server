import { Response, Request, NextFunction, Router } from "express";
import HelloWorldService from "../service/HelloWorldService";
import { currentTime } from "../../commons/util/DateUtil";

let HelloWorldRouter = Router();
const service = new HelloWorldService();


HelloWorldRouter.use((error: any, req: Request, res: Response, next: NextFunction) => { 
  res.json(service.errorHandler(error));
});

/**
 * GET /api
 * List of API examples.
 */
HelloWorldRouter.get('/', (req: Request, res: Response, next: NextFunction) => { 
  res.json(service.helloWorld());
});

/**
 * GET /api
 * List of API examples.
 */
HelloWorldRouter.get('/array', (req: Request, res: Response, next: NextFunction) => { 
  res.json(service.arrayResult());
});

/**
 * GET /api
 * List of API examples.
 */
HelloWorldRouter.get('/view', (req: Request, res: Response, next: NextFunction) => { 
  res.render(service.helloWorldView())
});

export default HelloWorldRouter;