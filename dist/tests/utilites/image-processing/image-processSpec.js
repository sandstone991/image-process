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
Object.defineProperty(exports, "__esModule", { value: true });
const image_process_1 = require("../../../utilities/image-processing/image-process");
describe('Test resize functionality', () => {
    it('resizes an image succesfully', () => __awaiter(void 0, void 0, void 0, function* () {
        let t = yield (0, image_process_1.resize)(`${__dirname}\\images\\encenadaport.jpg`, 200, 200, `${__dirname}\\images\\output.jpg`);
        expect(t).toBeInstanceOf(Object);
    }));
    it('Gives an error because filename could not be found', () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const t = yield (0, image_process_1.resize)(`${__dirname}\\images\\filewhichdoesntexist.jpg`, 200, 200, `${__dirname}\\images\\output.jpg`);
        }
        catch (err) {
            expect(err).toBeInstanceOf(Error);
        }
    }));
});
