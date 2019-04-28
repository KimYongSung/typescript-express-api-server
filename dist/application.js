"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ejs_1 = __importDefault(require("ejs"));
var path_1 = __importDefault(require("path"));
var routerRegister_1 = __importDefault(require("./routerRegister"));
/**
 * express
 */
var app = express_1.default();
/**
 * JSON Body parser
 */
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
/**
 * view config
 */
app.set('views', path_1.default.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.engine('html', ejs_1.default.renderFile);
/**
 * static resource config
 */
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
/**
 * Router regist
 */
routerRegister_1.default(app);
exports.default = app;
//# sourceMappingURL=application.js.map