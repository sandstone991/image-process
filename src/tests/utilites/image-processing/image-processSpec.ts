import exp from "constants";
import { resize } from "../../../utilities/image-processing/image-process";
describe('Test resize functionality', () => {
    it('resizes an image succesfully', async () => {

        let t = await resize(`${__dirname}\\images\\encenadaport.jpg`, 200, 200, `${__dirname}\\images\\output.jpg`)
        expect(t).toBeInstanceOf(Object)
    }
    );
    it('Gives an error because filename could not be found', async () => {
        try {
            const t = await resize(`${__dirname}\\images\\filewhichdoesntexist.jpg`, 200, 200, `${__dirname}\\images\\output.jpg`)
        } catch (err) {
            expect(err).toBeInstanceOf(Error)
        }

    }
    );


})