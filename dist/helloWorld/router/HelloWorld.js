"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var HelloWorldService_1 = __importDefault(require("../service/HelloWorldService"));
var HelloWorldRouter = express_1.Router();
var service = new HelloWorldService_1.default();
HelloWorldRouter.use(function (error, req, res, next) {
    console.error(error.stack);
    res.json('Something broke!');
});
/**
 * GET /api
 * List of API examples.
 */
HelloWorldRouter.get('/', function (req, res, next) {
    res.json(service.helloWorld());
});
/**
 * GET /api
 * List of API examples.
 */
HelloWorldRouter.get('/array', function (req, res, next) {
    res.json(service.arrayResult());
});
/**
 * GET /api
 * List of API examples.
 */
HelloWorldRouter.get('/view', function (req, res, next) {
    res.render(service.helloWorldView());
});
exports.default = HelloWorldRouter;
//# sourceMappingURL=HelloWorld.js.map