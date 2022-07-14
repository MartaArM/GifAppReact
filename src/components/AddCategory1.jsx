import { useState } from "react"

// En este componente se pasa la funcion setCategories desde el principal hacia este.


export const AddCategory1 = ( {setCategories}) /*Funcion que cambia las categorias en el componente principal */ => {

    const[valueInput, setValueInput] = useState(""); // Valor del input

    const inputChange = (event) => { //Escribo en el input
        setValueInput(event.target.value); // Coger el valor del input cuando cambia
    }

    const submitForm = (event) => { // Cuando pulso la tecla enter en el input
        event.preventDefault(); //Se utiliza para que no se recargue la página cuando le das enter

        if (valueInput.trim().length>1) { //Si lo que inserto tiene longitud mayor a 1
            setCategories((categories) => [valueInput, ...categories]);
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