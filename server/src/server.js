import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import router from './routers/zindex.js';
import { PORT } from './config/configuration.js';
import { isEmailValid } from './config/EmailConfig.js';
import upload from './middleware/handleFile.js';

const app = express();
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/demo', async (req, res) => {
  const { valid, reason, validators } = await isEmailValid(
    'vutrubaola2001@gmail.com'
  );
  if (valid) {
    res.send('OK');
  } else {
    res.send('No');
  }
});

app.post('/test', upload.single('image'), async (req, res) => {
  console.log(req.file);
  res.send(req.body);
});

router(app);

app.listen(PORT);
