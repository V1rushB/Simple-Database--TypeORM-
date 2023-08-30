import express from 'express';
import "reflect-metadata";
import db from './db/dataSource.js';
import register from './router/user.js'

const app = express();
const PORT = 2077;

app.use(express.json());

app.use('/register',register);

app.use((req, res) => {
    res.status(404).send("maybe try and look lateR?");
});

app.listen(PORT,()=> {
    console.log(`Server is up and currently running on port: ${PORT}`);
    db.initialize();
});