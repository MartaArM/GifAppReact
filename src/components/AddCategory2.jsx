import { useState } from "react"

// En este componente se pasa la funcion setCategories desde el principal hacia este.


export const AddCategory2 = ( {newCategory}) /*Funcion que cambia las categorias en el componente principal */ => {

    const[valueInput, setValueInput] = useState(""); // Valor del input

    const inputChange = (event) => { //Escribo en el input
        setValueInput(event.target.value); // Coger el valor del input cuando cambia
    }

    const submitForm = (event) => { // Cuando pulso la tecla enter en el input
        const valueTrim = valueInput.trim();
        event.preventDefault(); //Se utiliza para que no se recargue la página cuando le das enter

        if (valueTrim.length>1) { //Si lo que inserto tiene longitud mayor a 1
            newCategory(valueTrim); // Pasamos el valor a la funcion principal en vez de cambiarlo aqui
            setValueInput(''); // Limpiamos el valor para que en el input desaparezca
        }
    }

    return (
        <form onSubmit = {submitForm}>
            <input
            type="text"
            placeholder="Buscar..."
            value={valueInput}
            onChange = {inputChange} // No hace falta pasarle el event
            />
        </form>
    )
}