import express from 'express'
import sharp, { OutputInfo } from 'sharp';
export default function resizeMW(dirName: string, processed: string[]) {
    return async function (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ): Promise<void> {
        if (processed.indexOf(`${req.query.fileName}#${req.query.width}x${req.query.height}.jpg`) == -1) {
            try {
                const r = await resize(`${dirName}\\images\\full\\${req.query.fileName}.jpg`, +(req.query.width as string)
                    , +(req.query.height as string), `${dirName}\\images\\thumbnail\\${req.query.fileName}#${req.query.width}x${req.query.height}.jpg`)
                processed.push(`${req.query.fileName}#${req.query.width}x${req.query.height}.jpg` as string);
                next()
                return;
            } catch (err) {
                res.status(500).send(`${err}`);
                return next(err);
            }
        }
        return next();
    }
}
export async function resize(filePath: string, width: number, height: number, thumbPath: string): Promise<OutputInfo> {
    const t = await sharp(filePath)
        .resize(width, height)
        .toFile(thumbPath);
    return t;
}
