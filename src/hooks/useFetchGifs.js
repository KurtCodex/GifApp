import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, []) // si dejo vacio el parametro, se ejecutara unicamente cuando se cree el componente

    return {
        images, // cuando apunta al mismo nombre, puede quedar asi:      images,
        isLoading: false
    }
}