import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.static('public'));

app.listen(80, () =>
{
    console.log('Listening on Port 80');
});