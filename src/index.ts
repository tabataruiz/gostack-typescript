import express from 'express';
import {oiNinja} from './routes'

const app = express();

app.get('/', oiNinja);

app.listen(9999);