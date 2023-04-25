// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()
const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movie.model')
// all your routes here
// GET route for moive 
router.get('/create', async (req, res) => {
    try {
        const allCelebrities = await Celebrity.find()
        console.log(allCelebrities)
        res.render('movies/new-movie', {celebrities: allCelebrities})
    } catch (error) {
        console.log("There was a mistake, Try again", error);
    }
})
router.get('/', async (req, res) => {
    try {
        const allMovies = await Movie.find()
        res.render('/movies/movies', {movies: allMovies})
    } catch(error) {
    console.log("There was a mistake, Try again", error)
    }
})

// POST route for movie (way one copy and paste from celeb.)
router.post('/create', async (req, res) => {
    try {
    const addedMovie = await Movie.create(req.body)
        res.redirect("/movies");
} catch(error) {
    console.log("There was a mistake, Try again",error)
    res.render('movies/new-movie')
}
})

//teration 8 
router.post('/:id', async (req,res) => {
    try {
       const {movieId} = req.params
       const idMovie = await Movie.findById(movieId).populate('cast')
       res.render('/movies/movie-details', {idMovie})
    } catch (error) {
        console.log("There was a mistake, Try again", error)
    }
})

// iteration 9
router.post('/:id/delete', async (req,res) => {
    try {
       const {movieDelete} = req.params
       const deletedMovie = await Movie.findByIdAndDelete(movieDelete)
       res.redirect('/movies', {deletedMovie})
    } catch (error) {
        console.log("There was a mistake, Try again", error)
    }
})
//
module.exports = router