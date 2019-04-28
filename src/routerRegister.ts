import HelloWorldRouter from './helloWorld/router/HelloWorld';

import { Application, Response, Request, NextFunction } from "express";
import { currentTime } from './commons/util/DateuTIL';

/**
 * Router regist
 */
export default (app: Application)=>{

    app.use('/',(req: Request, res: Response, next: NextFunction) => { 
        console.log('Request URI  : ' , req.originalUrl);
        console.log('Request Time : ' , currentTime());
        console.log('Request Type : ' , req.method);
        next();
      });

    /**
     * HelloWorld
     */
    app.use('/helloWorld', HelloWorldRouter);

}