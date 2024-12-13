import { Schema, model } from "mongoose"

const EsquemaPerros = new Schema({
    name:String,
    Raza:String,
    Edad:String,
});

export const ModeloPerros = model("Perros", EsquemaPerros);