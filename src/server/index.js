import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, '/../../dist/')));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
