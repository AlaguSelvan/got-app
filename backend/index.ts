import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import characterRouter from './Routes/Character.routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;


// @ts-ignore
app.use(express.json());
// @ts-ignore
app.use(cors())


app.get('/', (req, res) => {
  res.send('Express Server');
});

app.use('/Characters', characterRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
