

export const getGifs = async(category) => {
    const url = "https://api.giphy.com/v1/gifs/search?api_key=4JLBLrHyLvEK1wT3VmiTMe73aintuoXO&q=" + category + "&limit=10";
    const resp = await fetch(url); // Hacemos la llamada a la url

    const {data} = await resp.json();

    const gifs = data.map( (img) => { // Creamos un objeto con los datos que nos interesan
        return (
            {
                id:img.id,
                title: img.title,
                url: img.images.fixed_height.url
            
            }
        )
    });


    return gifs;
}