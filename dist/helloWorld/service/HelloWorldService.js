"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorCode_1 = require("../../commons/constants/ErrorCode");
/**
 * HelloWorld 서비스
 */
var HelloWorldService = /** @class */ (function () {
    function HelloWorldService() {
    }
    /**
     * helloWorld json
     */
    HelloWorldService.prototype.helloWorld = function () {
        console.log("call helloWorld");
        return { code: ErrorCode_1.ErrorCode.CD_0000,
            msg: ErrorCode_1.ErrorMsg.CD_0000 };
    };
    /**
     * helloWorld json
     */
    HelloWorldService.prototype.arrayResult = function () {
        console.log("call helloWorld");
        var values = ["test", "test1", "test2"];
        return { code: ErrorCode_1.ErrorCode.CD_0000,
            msg: ErrorCode_1.ErrorMsg.CD_0000,
            size: values.length,
            list: values };
    };
    /**
     * helloWorld
     */
    HelloWorldService.prototype.helloWorldView = function () {
        console.log("call helloWorld view");
        return "helloWorld/helloWorld.html";
    };
    HelloWorldService.prototype.errorHandler = function () {
        return { code: ErrorCode_1.ErrorCode.CD_0000,
            msg: ErrorCode_1.ErrorMsg.CD_0000 };
    };
    return HelloWorldService;
}());
exports.default = HelloWorldService;
//# sourceMappingURL=HelloWorldService.js.map