import React from 'react'
import { useState } from 'react'

export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => { // (event) =>desestructurado => ({target})
        console.log(target.value);
        setInputValue(target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue)
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input
                type="text"
                placeholder="Buscar gif"
                value={inputValue}
                onChange={(event) => onInputChange(event)} // (event) => onInputChange(event)    es igual a      onInputChange
            />
        </form >

    )
}
