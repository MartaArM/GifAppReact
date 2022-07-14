import { useState } from "react"
//import { AddCategory1 } from "./components/AddCategory1";
// import { AddCategory2 } from "./components/AddCategory2";
// import { GifGrid} from "./components/GifGrid"
// Importacion con archivos de barril
import {AddCategory2, GifGrid} from './components'

export default function GifExpertApp( ) { 

    const [categories, setCategories]  = useState([]);

    const addCategory = (newCategory) => {
        if ( !categories.includes(newCategory)) // Si la categoria no está en la lista
            setCategories([newCategory, ...categories ]);
    }

    return(
        <>
            <h1>GifExpertApp</h1>

             {/* <AddCategory1 setCategories = {setCategories}/>  {/*Añadir un componente de otro archivo. */}
             <AddCategory2 newCategory = {addCategory} />
            
            {
                categories.map( (element) =>  ( // Por cada categoría creamos una lista de gifs
                    <GifGrid key={element} category={element}/> // Aqui se muestran los GIF
                ))
            }

        </>)
} 