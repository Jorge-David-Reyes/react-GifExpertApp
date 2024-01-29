import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    /* @param deps — If present, effect will only activate if the values in the list change. */
    /*useEffect(() => {
        getGifs(category);
    }, []);*/

    /* Primera forma */
    /*useEffect( () => {
        getGifs(category)
            .then( newImages => setImages(newImages) );
    })*/

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    /* Segunda forma */
    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };

    useEffect( () => {
        getImages();
    }, []); 

  return {
    images,
    isLoading
  }
}
