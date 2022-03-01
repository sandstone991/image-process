"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = require("./routes/api/api");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const jsonParser = body_parser_1.default.json();
const urlencodedParser = body_parser_1.default.urlencoded({ extended: false });
app.use(jsonParser);
app.use(urlencodedParser);
app.use('/api', api_1.router);
const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port};`);
    // console.log(__dirname);
    // getProcessedImages(processed,__dirname);
});
app.get('/', (req, res) => {
    res.status(200).send('Hello');
});
exports.default = app;
