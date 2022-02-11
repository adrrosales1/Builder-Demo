const express = require ("express")
const app = express()

// Home Static
app.use(express.static("public"))

// Render view with ejs
app.set('view engine', 'ejs')
app.get("/terminos_condiciones", (req, res) => {
    console.log("Here")
    res.render("terms_conditions")
})

app.listen(3002)