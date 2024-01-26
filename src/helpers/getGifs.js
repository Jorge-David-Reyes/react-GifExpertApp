export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=yX8PtfuemVMGn5Zxdpo4EjTW6W7Ytxma&q=${ category }&limit=20`;
    const resp = await fetch( url );
    const { data } = await  resp.json();

    const gifs = data.map( img => ({
        id: img.ig,
        title: img.tilte,
        url: img.images.downsized_medium.url
    }));

    console.log(gifs);
    return gifs;
}