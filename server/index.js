import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

/* eslint-disable no-console */
app.listen(3000, () => {
  console.log(`
    Node server started at port 3000.
  `);
});
