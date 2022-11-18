import { useState } from 'react'

export function AddCategory({ onNewCategory }) {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const value = inputValue.trim()
        if ( value.length == 0 ) return;
        onNewCategory( value )
        setInputValue( '' )
    }
  return (
    <form action="" onSubmit={ onSubmit }>

        <input 
            type="text" 
            placeholder='Buscar gifs'
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}
