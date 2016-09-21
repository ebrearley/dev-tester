import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import analyseCode from './analyse-code';

const app = express();

app.use(express.static(path.join(__dirname, '/../../dist/')));
app.use(bodyParser.json());

app.post('/validate', (req, res) => {
  const data = req.body;

  const analyseCallback = (response) => {
    res.json(response);
  };

  analyseCode(data.codeString, analyseCallback);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
