const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const CategorieSchema = new Schema (
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
    }
)

const Categorie = mongoose.model('categories', CategorieSchema)

module.exports = Categorie