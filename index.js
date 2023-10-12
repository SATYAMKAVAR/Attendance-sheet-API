const expres = require('express');
const mongoose = require('mongoose');
const attendance = require('./model/attendance');
const bodyParser = require('body-parser');
const cors = require('cors')
mongoose.connect("mongodb+srv://satyam:s%40ty%40mAttendance@cluster0.rnh8qo6.mongodb.net/Attendance")
    .then(() => {
        console.log("conntected to mongo atlas...");
        const app = expres();
        const port = 3030;
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(cors())
        app.get('/', async (req, res) => {
            const data = await attendance.find()
            res.send(data)
        })

        app.get('/:id', async (req, res) => {
            const data = await attendance.findOne({ _id: req.params.id })
            res.send(data);
        })

        app.delete('/:id', async (req, res) => {
            const data = await attendance.deleteOne({ _id: req.params.id })
            res.send(data)
        })

        app.post('/', async (req, res) => {
            const data = attendance();
            data.a1 = req.body.a1;
            data.a2 = req.body.a2;
            data.a3 = req.body.a3;
            data.b1 = req.body.b1;
            data.b2 = req.body.b2;
            data.date = req.body.date;
            data.countera = req.body.countera;
            data.counterb = req.body.counterb;
            await data.save();
            res.send(data);
        })

        app.put('/:id', async (req, res) => {
            const data = await attendance.findOne({ _id: req.params.id });
            data.a1 = req.body.a1;
            data.a2 = req.body.a2;
            data.a3 = req.body.a3;
            data.b1 = req.body.b1;
            data.b2 = req.body.b2;
            data.date = req.body.date;
            data.countera = req.body.countera;
            data.counterb = req.body.counterb;
            await data.save();
            res.send(data);
        })

        app.listen(port, () => {
            console.log("http://localhost:" + port);
        })
    })
    .catch(error => console.error('could not connect to mongo atlas...', error))