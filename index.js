const express = require('express')
const app = express();
const port = 5000;
const collegeData = require('./data/college.json')
const AllCollegeData = require('./data/AllColleges.json')
const collegeDetailsData = require('./data/CollegeDetails.json')
const cors = require('cors')
app.use(cors())
app.get('/', (req, res) =>{
    res.send("port is running")
})
app.get('/college', (req, res) =>{
    res.send(collegeData)
})
app.get('/collegedetails/:id', (req, res) =>{
    const id = req.params.id;
    console.log(id)
    const selectedCollegeDetails = collegeDetailsData.find(collegeData => collegeData.id == id);
    res.send(selectedCollegeDetails)
    console.log(selectedCollegeDetails)
})
app.get('/allcollege', (req, res) =>{
    res.send(AllCollegeData)
})
app.get('/allcollegedetails/:id', (req, res) =>{
    const id = req.params.id;
    console.log(id)
    const selectedAllCollegeDetails = AllCollegeData.find(collegeDetails => collegeDetails.id == id);
    res.send(selectedAllCollegeDetails)
    console.log(selectedAllCollegeDetails)
})

app.listen(port, ()=>{
    console.log(`College Booking Api port is running: ${port}`)
})