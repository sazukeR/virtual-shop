 import mongoose, {Schema, Model, model} from 'mongoose'
import { IProduct } from '../interfaces'


const productSchema = new Schema({

    description: {type: String, required: true},
    images: [{type: String}],
    inStock: {type: Number, required: true, default: 0},
    price: {type: Number, required: true, default: 0},
    sizes: [{
        type: String,
        enum: {
            values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
            message: '{VALUE} is not a valid size'
        }
    }],
    slug: {type: String, required: true, unique: true },
    tags: [{type: String}],
    title: {type: String, required: true},
    type: {
        type: String,
        enum: {
            values: ['shirts', 'pants', 'hoodies', 'hats'],
            message: '{VALUE} is not a valid type'
        }
    },
    gender: {
        type: String,
        enum: {
            values: ['men', 'women', 'kid', 'unisex'],
            message: '{VALUE} is not a valid gender'
        }
    },
    
}, {
    timestamps: true // ESTO HACE QUE MONGOSE CREE LOS TIMESTAMPS POR MI, FECHA DE CREACION, FECHA DE ACTUALIZACION
})


// TODO: crear indice de mongo
productSchema.index({title: "text", tags: "text"});
// LUEGO DE CREAR ESTE INDICE DEBEMOS BAJAR Y SUBIR EL SERVIDOR PARA TOMAR LOS CAMBIOS





const Product:  Model<IProduct> = mongoose.models.Product || model('Product', productSchema)

export default Product;