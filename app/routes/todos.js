const express = require('express');
const router = express.Router();

// In-memory data storage
let todos = [];

// GET all todos
router.get('/', (req, res) => {
    res.status(200).json({message:"Todos Found!"});
});

// GET todo by ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const todo = todos.find(todo => todo.id === id);
    if (!todo) {
        res.status(404).json({ message: 'Todo 45 found' });
    } else {
        res.json(todo);
    }
});

// POST todo
router.post('/', (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo);
    res.status(201).json({message: "Todo Post Found!"});
    
});

// PUT todo by ID
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedTodo = req.body;
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) {
        res.status(404).json({ message: 'Todo 89 found' });
    } else {
        todos[index] = { ...todos[index], ...updatedTodo };
        res.json(todos[index]);
    }
});

//PATCH todo by ID
router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const updatedFields = req.body;
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) {
        res.status(404).json({ message: `Todo PATCH 89  found` });
    } else {
        todos[index] = { ...todos[index], ...updatedFields };
        res.json(todos[index]);
    }
});

// DELETE todo by ID
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    todos = todos.filter(todo => todo.id !== id);
    res.json({ message: 'Todo 9 deleted successfully' });
});

module.exports = router;