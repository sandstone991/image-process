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
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const fs_1 = require("fs");
const image_process_1 = __importDefault(require("../../utilities/image-processing/image-process"));
const router = express_1.default.Router();
exports.router = router;
let processed = [];
(function getProcessedImages() {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log(__dirname)
        const files = yield fs_1.promises.readdir(`${__dirname}\\images\\thumbnail`);
        return files;
    });
}()).then(data => processed = data);
const resize = (0, image_process_1.default)(__dirname, processed);
router.get('/', (req, res) => {
    res.status(200).send('Api Route');
});
router.use('/images', resize);
router.get('/images', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200).sendFile(`images\\thumbnail\\${req.query.fileName}#${req.query.width}x${req.query.height}.jpg`, { root: __dirname });
}));
