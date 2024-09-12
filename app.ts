import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import Customer from './models/customer.model';

const app = express();
 
app.use(morgan('tiny'));
 
app.use(cors());
 
app.use(helmet());
 
app.use(express.json());
 
app.use((req: Request, res: Response, next: NextFunction) => {
    const customer = new Customer("Thiago", "537.918.938-58")
    res.send(`Nome: ${customer.name} e CPF: ${customer.cpf}`);
})
 
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).send(error.message);
})
 
export default app;