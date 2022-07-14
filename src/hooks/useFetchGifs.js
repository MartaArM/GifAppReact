// Hook customizado

import { useEffect, useState } from "react";
import { getGifs } from "../functions/getGifs";

export const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([]); // Creamos una lista de gifs
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => { // Hace que la funcion que tiene dentro solo se ejecute una vez
        getGifs(category).then(newGifs => setGifs(newGifs)); // Como getGifs devuelve una promesa porque es asincrona, tenemos que ejecutar el código en el then.
        setIsLoading(false);
    }, [] )



    return {
        gifs: gifs,
        isLoading: isLoading
    }
}