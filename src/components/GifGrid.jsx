import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    /* @param deps — If present, effect will only activate if the values in the list change. */
    useEffect(() => {
        getGifs(category);
    }, []);

    return (
        <>
            <h3>{ category }</h3>
        </>
    )
}
