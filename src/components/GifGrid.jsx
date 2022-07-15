import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';



// ELemento para mostrar los gifs
export const GifGrid = ( {category})  => {
    
    
    // Vamos a usar un custom hook
    const {gifs, isLoading} = useFetchGifs(category);

    
    {
        isLoading ? (<h2> Cargando.. </h2>) : null // Muestra un mensaje de cargando mientras que se cargan las imagenes
    }


    return (
        <>
            <h3>{ category }</h3>
            <div className="card-grid">
            {
                gifs.map( (element) =>  ( // Por cada categoría creamos una lista de gifs
                    <GifItem key={element.id} {...element}/> // Aqui se muestran los GIF
                ) )
            }

            </div>
        </>
    )
}