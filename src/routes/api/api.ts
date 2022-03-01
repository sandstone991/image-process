import express from 'express';
import { promises as fsPromises } from 'fs';
import resizeMW from '../../utilities/image-processing/image-process';
const router = express.Router()
let processed: string[] = [];
(async function getProcessedImages(): Promise<string[]> {
  // console.log(__dirname)
  const files = await fsPromises.readdir(`${__dirname}\\images\\thumbnail`);
  return files as string[]
}()).then(data => processed = data);

const resize = resizeMW(__dirname, processed)
router.get('/', (req: express.Request, res: express.Response): void => {
  res.status(200).send('Api Route')
})
router.use('/images', resize)
router.get('/images', async (req: express.Request, res: express.Response) => {

  res.status(200).sendFile(`images\\thumbnail\\${req.query.fileName}#${req.query.width}x${req.query.height}.jpg`, { root: __dirname });
}

);
export { router }

