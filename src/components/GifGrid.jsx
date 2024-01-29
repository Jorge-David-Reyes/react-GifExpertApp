/* React */
import { useEffect, useState } from 'react';

/* Importaciones de terceros */

/* Nuestro codigo */
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    /* @param deps — If present, effect will only activate if the values in the list change. */
    /*useEffect(() => {
        getGifs(category);
    }, []);*/

    /* Primera forma */
    /*useEffect( () => {
        getGifs(category)
            .then( newImages => setImages(newImages) );
    })*/

    /* Segunda forma */
    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
    };

    useEffect( () => {
        getImages();
    }, []);

    return (
        <>
            <h3>{ category }</h3>

            <div className="card-grid">
                {
                    images.map( (image) => (
                        //<li key={ id }>{ title }</li>
                        
                        <GifItem 
                            key={image.id}
                            { ...image }
                        />
                    ))
                }
            </div>
        </>
    )
}
