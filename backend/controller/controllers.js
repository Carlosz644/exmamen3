import { ModeloPerros } from "./backend/model/model";


export const test = () => {
  console.log("test");

  
  ModeloPerros.create({
    name: "Rocky",
    Raza: "Rottweiler",
    Edad: "3",
  })
    
};
