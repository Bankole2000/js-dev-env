import express from 'express';
import { join } from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable */

const port = 5000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('/', (req, res) => {
 res.sendFile(join(__dirname, '../src/index.html'))
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity, pretend this hits a real database,
  res.json([
    {"id": 1, "firstName":"Bob", "lastName":"Smith", "email":"bob@gmail.com"},
    {"id": 1, "firstName":"John", "lastName":"Norton", "email":"tnorton@yahoo.com"},
    {"id": 1, "firstName":"James", "lastName":"Lee", "email":"lee.james@hotmail.com"}
  ]);
});

app.listen(port, (err) => {
  err ? console.log(err): open(`http://localhost:${port}`);
});
