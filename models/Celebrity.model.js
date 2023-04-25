//  Add your code here
// requiring mongoose
//iteration 2
const {Schema, model} = require('mongoose')
// creating the model 
const modelSchema = new Schema ({
    name: {
        type: String
    },
    occupation: {
        type: String
    },
    catchPhrase: {
        type: String
    }
});

const Celebrity = model('Celebrity', modelSchema);
module.exports = Celebrity;
