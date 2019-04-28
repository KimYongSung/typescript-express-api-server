"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var HelloWorld_1 = __importDefault(require("./helloWorld/router/HelloWorld"));
var DateuTIL_1 = require("./commons/util/DateuTIL");
/**
 * Router regist
 */
exports.default = (function (app) {
    app.use('/', function (req, res, next) {
        console.log('Request Time : ', DateuTIL_1.currentTime());
        console.log('Request Type : ', req.method);
        next();
    });
    /**
     * HelloWorld
     */
    app.use('/helloWorld', HelloWorld_1.default);
});
//# sourceMappingURL=routerRegister.js.map