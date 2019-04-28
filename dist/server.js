"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var application_1 = __importDefault(require("./application"));
var port = process.env.port || 3030;
/**
 * Start Express server.
 */
var server = application_1.default.listen(port, function () {
    console.log("  App is running at http://localhost:%d in %s mode", port, application_1.default.get("env"));
    console.log("  Press CTRL-C to stop\n");
});
exports.default = server;
//# sourceMappingURL=server.js.map