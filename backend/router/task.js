const express = require("express"); 
const router = express.Router();

const Task = require("../model/task");

// GET all tasks

router.get("/all", async (req, res) => {
    try {
        const data = await Task.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET task by ID

router.get("/:id", async (req, res) => {
    try {
        const data = await Task.findById(req.params.id);

        if (!data) {
            return res.status(404).json({ error: "Task not found" });
        }

        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST create task

router.post("/add", async (req, res) => {
    try {
        const savedata = await Task.create(req.body);
        res.status(201).json(savedata);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// PUT update task

router.put("/:id", async (req, res) => {
    try {
        const updateddata = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updateddata) {
            return res.status(404).json({ error: "Task not found" });
        }

        res.json(updateddata);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE task

router.delete("/:id", async (req, res) => {
    try {
        const deletedata = await Task.findByIdAndDelete(req.params.id);

        if (!deletedata) {
            return res.status(404).json({ error: "Task not found" });
        }

        res.json(deletedata);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
