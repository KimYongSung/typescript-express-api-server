import express, { Response } from 'express';
import ejs from 'ejs';
import path from "path";
import routerRegister from './routerRegister';

/**
 * express 
 */
const app = express();

/**
 * JSON Body parser
 */
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/**
 * view config
 */
app.set('views', path.join(__dirname,'../views'));
app.set('view engine','ejs');
app.engine('html', ejs.renderFile);

/**
 * static resource config
 */
app.use(express.static(path.join(__dirname,'../public')));

/**
 * Router regist
 */
routerRegister(app);

export default app;