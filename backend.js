const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/workflows', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const workflowSchema = new mongoose.Schema({
    name: String,
    steps: Array,
});

const Workflow = mongoose.model('Workflow', workflowSchema);

app.post('/workflows', async (req, res) => {
    const workflow = new Workflow(req.body);
    await workflow.save();
    res.send(workflow);
});

app.get('/workflows', async (req, res) => {
    const workflows = await Workflow.find();
    res.send(workflows);
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
