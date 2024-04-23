const mongoose =  require('mongoose')

const ProductSchema =  new mongoose.Schema({
     petId:{
      type: Number,
      default: 0,
     },
     name: {
      type: String,
    },
    gender:{
      type: String,
    },
    age:{
      type: Number,
      default: 0,
    },
    breed:{
      type: String,
    },
    location:{
      type: String,
    },
    desc:{
      type: String,
    }
},{
   timestamps: true,
}
)
const Product = mongoose.model("Product", ProductSchema)

module.exports = Product;