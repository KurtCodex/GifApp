import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            {/* titulo */}
            <h1>Gif APP</h1>

            {/* Input */}
            <AddCategory
                onNewCategory={value => onAddCategory(value)} // event => onAddCategory(event)  es lo mismo que onAddCategory
            // setCategories={setCategories}
            />
            {/* Gifs List */}
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))

                // categories.map( (category) => 
                //     (
                //         <div key={category}>
                //             <h3> {category} </h3>
                //             <li > {category} </li>
                //         </div>
                //     
                //     ))
            }

            {/* Gif Item */}


        </>
    )
}
