import  express from 'express';
const app = express();

const user = [];
app.use(express.json());
app.post('/usuario', (req, res) => {
console.log(req.body);
res.send('Usuario recibido');
user.push(req.body);

})

app.get('/usuario', (req, res) => {
  
res.json(user);
})
app.listen(3000); 






