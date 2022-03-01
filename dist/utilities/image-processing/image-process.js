"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resize = void 0;
const sharp_1 = __importDefault(require("sharp"));
function resizeMW(dirName, processed) {
    return function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (processed.indexOf(`${req.query.fileName}#${req.query.width}x${req.query.height}.jpg`) == -1) {
                try {
                    const r = yield resize(`${dirName}\\images\\full\\${req.query.fileName}.jpg`, +req.query.width, +req.query.height, `${dirName}\\images\\thumbnail\\${req.query.fileName}#${req.query.width}x${req.query.height}.jpg`);
                    processed.push(`${req.query.fileName}#${req.query.width}x${req.query.height}.jpg`);
                    next();
                    return;
                }
                catch (err) {
                    res.status(500).send(`${err}`);
                    return next(err);
                }
            }
            return next();
        });
    };
}
exports.default = resizeMW;
function resize(filePath, width, height, thumbPath) {
    return __awaiter(this, void 0, void 0, function* () {
        const t = yield (0, sharp_1.default)(filePath)
            .resize(width, height)
            .toFile(thumbPath);
        return t;
    });
}
exports.resize = resize;
