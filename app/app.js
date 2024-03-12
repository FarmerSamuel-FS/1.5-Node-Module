const express = require('express');
const app = express();
const router = require('./routes');
const todosRouter = require('./routes/todos');
app.use(express.json());

'localhost:3000/';
app.get('/', (req, res) => {
    console.log('GET');
    res.json({ message: 'Service is up!'});
});

'localhost:3000/api';
app.use('/api', router);
app.use('/todos', todosRouter);

app.use((req, res, next)=> {
    const error = new Error("Not Found");
    error.status= 404;
    next(error);
});

app.use((err, req, res, next)=>{
    console.log('ERROR >>>', err);
    res.status(err.status || 500).json({message: err.message, status: err.status});
});

module.exports = app;1