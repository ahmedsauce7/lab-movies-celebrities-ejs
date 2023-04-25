// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()
const Celebrity = require('../models/Celebrity.model')
// all your routes here
//iteration 3
router.get('/', async (req, res) => {
    try {
        const allCelebrities = await Celebrity.find();
        console.log(allCelebrities)
        res.render('celebrities/celebrities', {celebrities: allCelebrities})
    }catch (error) {
        console.log("There was a mistake, Try again",error)
    }
})

//create celebrity
router.get('/create', (req, res) => {
    console.log("error loading")
    res.render('celebrities/new-celebrity')
})

//creating POST 
router.post('/create', async (req, res) => {
    try {
    const addedCeleb = await Celebrity.create(req.body)
        res.redirect("/celebrities");
} catch(error) {
    console.log(error)
    res.render('celebrities/new-celebrities')
}
});


module.exports = router