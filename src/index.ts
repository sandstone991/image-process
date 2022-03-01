import express from 'express';
import { router as apiRouter } from './routes/api/api';

import bodyParser from 'body-parser';
const app = express();

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(jsonParser);
app.use(urlencodedParser);
app.use('/api', apiRouter)
const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port};`);
  // console.log(__dirname);
  // getProcessedImages(processed,__dirname);
});
app.get('/', (req: express.Request, res: express.Response) => {
  res.status(200).send('Hello');
});


export default app;
