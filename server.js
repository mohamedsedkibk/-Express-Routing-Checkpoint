
const express = require('express')
const app = express()
const port = 4000
const checktime = (req, res, next) => {
    const date = new Date()
    const days = date.getDay()
    const hours = date.getHours()
    if (days >= 1 && days <= 5 && hours >= 9 && hours <= 11) {
        return next()
    }
    else return res.send('site is close')
}


app.listen(port, checktime ,(err) => {
    err ? console.log("error", err) : console.log(`server is ok ${port}`)
})


app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/home', checktime,(req, res) => {
    res.render('home')
})

app.get('/contact', checktime ,(req, res) => {
    res.render('contact us')
})
app.get('/service',checktime ,(req, res) => {
    res.render('our services')
})


