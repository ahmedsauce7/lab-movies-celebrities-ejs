//  Add your code here
// requiring mongoose
// iteration 5
const {Schema, model} = require('mongoose')
// creating the model 
const movieSchema = new Schema ({
    title: {
        type: String
    },
    genre: {
        type: String
    },
    plot: {
        type: String
    },
    cast: [{
        type: Schema.Types.ObjectId,
        ref: 'Celebrity'
    }]
});

const Movie = model('Movie', movieSchema);
module.exports = Movie;