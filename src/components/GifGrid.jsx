import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

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

            <ol>
                {
                    /*
                    images.map( ({id, title}) => {
                        return <li key={ id }>{ title }</li>
                    })*/

                    images.map( ({id, title}) => (
                        <li key={ id }>{ title }</li>
                    ))
                }
            </ol>
        </>
    )
}
