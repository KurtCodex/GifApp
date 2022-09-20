
export const getGifs = async (category) => {
    const url = ` https://api.giphy.com/v1/gifs/search?api_key=ZFgcEKzhm7aVlpWou58pZVN9aIB3E1RY&q=${category}&limit=5`;
    const response = await fetch(url)
    const { data } = await response.json();


    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    console.log(gifs);
    return gifs;
}
