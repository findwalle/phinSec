const db = require('../database/firebase');

const todoController = {};

todoController.getTasks = async (req, res, next) => {
    try {
        let tasks = [];
        const snapshot = await db.collection("todoitems").get();
        await snapshot.forEach(doc => {
            tasks.push({...doc.data(), id: doc.id})
        })
        res.locals.allTasks = tasks;
        return next();
    } catch (err) {
        return next({
            log: `error caught in todoController.getTasks : ${err}`,
            message: {err: 'an error occurred while attempting to get todo tasks'}
          })
    }
}

todoController.addTask = async (req, res, next) => {
    try {
        // deconstructing details
        const { details } = req.body;
        const newTask = await db.collection('todoitems').add({
            complete: false,
            details: details,
            created_at: new Date()
        });
        res.locals.addTask = JSON.stringify(newTask);
        return next();
    } catch (err) {
        return next({
            log: `error caught in todoController.addTask : ${err}`,
            message: {err: 'an error occurred while attempting to add a todo task'}
          })
    }
}

todoController.editTask = async (req, res, next) => {
    try {
        // deconstructing details
        const { id, details } = req.body;

        const editTask = await db.collection("todoitems").doc(id).set({
            details: details,
        }, { merge: true })
        res.locals.editTask = editTask;
        return next();
    } catch (err) {
        return next({
            log: `error caught in todoController.editTask : ${err}`,
            message: {err: 'an error occurred while attempting to edit a todo task'}
          })
    }
}

todoController.deleteTask = async (req, res, next) => {
    try {
        // deconstructing details
        const { id } = req.body;
        const res = await db.collection('todoitems').doc(id).delete();

        res.locals.deleteTask = res;
        return next();

    } catch (err) {
        return next({
            log: `error caught in todoController.deleteTask : ${err}`,
            message: {err: 'an error occurred while attempting to delete a todo task'}
          })
    }
}

todoController.markComplete = async (req, res, next) => {
    try {
        // deconstructing details
        const { id, complete } = req.body;

        const markComplete = await db.collection("todoitems").doc(id).set({
            complete: !complete,
        }, { merge: true })
        res.locals.markComplete = markComplete;
        return next();
    } catch (err) {
        return next({
            log: `error caught in todoController.markComplete : ${err}`,
            message: {err: 'an error occurred while attempting to mark a todo task complete'}
          })
    }
}

module.exports = todoController;