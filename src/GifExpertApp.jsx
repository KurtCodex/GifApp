import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One', 'Two']);

    const onAddCategory = () => {
        setCategories(['Three', ...categories])
    }

    return (
        <>
            {/* titulo */}
            <h1>Gif APP</h1>

            {/* Input */}
            <AddCategory setCategories={setCategories} />


            {/* Gifs List */}

            <ol>
                {categories.map(category => {
                    return (
                        <li key={category}> {category} </li>
                    )
                })}
            </ol>
            {/* Gif Item */}


        </>
    )
}
