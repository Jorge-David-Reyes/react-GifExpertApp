import { useState } from "react"

export const AddCategory = ({setCategories}) => {
    const [ inputValue, setInputValue ] = useState('One Punch');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;

        setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar gifs" 
                value={ inputValue }
                // onChange ={ (event) => onInputChange(event) }
                onChange={ onInputChange }
            />
        </form>
    )
}
