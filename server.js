import  express from 'express';
const app = express();

app.get('/usuario', (req, res) => {
  res.send('Hello, World!');
})
app.listen(3000);