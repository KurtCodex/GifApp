import React from 'react'
import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => { // (event) =>desestructurado => ({target})
        setInputValue(target.value)
    }


    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim())
        setInputValue('');
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
