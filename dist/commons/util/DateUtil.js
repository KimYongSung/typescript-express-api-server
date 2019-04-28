"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
function currentTime() {
    return moment_1.default().format('YYYY-MM-DD HH:mm:ss');
}
exports.currentTime = currentTime;
//# sourceMappingURL=DateUtil.js.map