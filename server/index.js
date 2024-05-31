const express = require('express')
const cors = require('cors')
const htmlPdf = require('html-pdf')
const sample = require('./sample/resume')
const download = require('download');

const app = express()
const port = 4000
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/resume', (req,res)=>{
    htmlPdf.create(sample(req.body), {"format" : "A4"}).toFile('./Resume.pdf', (err,resp)=>{
        if (err) console.log(err)
        console.log("Success",resp)
    })

})
app.get('/download', (req,res)=>{
    res.sendFile(`${__dirname}/Resume.pdf`)
})

app.use(express.static('../client/vite-project/index.html'))

app.listen(port , ()=>{
    console.log(`Server started at port: ${port}`)
})