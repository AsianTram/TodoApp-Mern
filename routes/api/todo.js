const express=require('express');
const router= express.Router();
const Todo= require('../../models/Todo');
const auth =require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

//Add Todo
router.post('/', [auth, [check('task', "Task name is required").not().isEmpty(), check('duedate',"Due date is required").not().isEmpty()]], async (req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    var {task, duedate, location, description} = req.body;
    duedate= new Date(duedate);

    try {
        var newTodo = new Todo({user: req.user.id, task, duedate, location, description});
        await newTodo.save();
        res.json(newTodo);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
    


})
//Get all Todo
router.get('/', auth ,async (req,res)=>{
    try {
        const todos= await Todo.find({user: req.user.id, done: false, due: false});
        var nowDateTime= Date.now();
        if(todos.length>0){
        for(i=0; i<todos.length; i++){
            
            if(nowDateTime>todos[i].duedate){
                await Todo.update({"_id":todos[i]._id},{$set: {"due": true}});
            }
        }

        const filteredTodos= await Todo.find({user: req.user.id, done: false, due: false});

        return res.json(filteredTodos);
    }
        return res.json(todos);

    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Server error');
    }  
    
})

//Get task has been dued
router.get("/due",auth, async (req,res)=>{
    try {
        const todos= await Todo.find({user: req.user.id, done: false, due: false});
        var nowDateTime= Date.now();

        if(todos.length>0){
        for(i=0; i<todos.length; i++){
            
            if(nowDateTime>todos[i].duedate){
                await Todo.update({"_id":todos[i]._id},{$set: {"due": true}});
            }
        }

        const filteredTodos= await Todo.find({user: req.user.id, done: false, due: true});

        return res.json(filteredTodos);
    }
        return res.send(todos);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }  
})

// Get tasks have been done 
router.get('/done', auth, async (req, res)=>{
    try {
        const done= await Todo.find({user: req.user.id, done: true});
        res.json(done);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
})

//Check task has been done
router.put('/done/:task_id', auth, async (req,res)=>{
    const task_id= req.params.task_id;

    try {
        await Todo.updateOne({"_id": task_id}, {$set:{"done": true}});
        var todo= await Todo.findById(task_id);
        res.json(todo);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }

})

// Delete tasks
router.delete('/delete/:task_id', auth, async (req,res)=>{
    const task_id= req.params.task_id;

    try {
        await Todo.deleteOne({"_id": task_id});
        res.json({_id: task_id});
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }
})

module.exports=router;