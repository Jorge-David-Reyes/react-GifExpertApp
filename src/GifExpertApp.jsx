import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  /* Hook listado de categorias */
  const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);

  const onAddCategory = () => {
     /* Sintaxis Spread ...categories */
      setCategories(['Valorant', ...categories]);

      /* Recibiendo el estado anterior */
      /*setCategories(cat => [...cat, 'Valorant']);*/
  }

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory/>

        {/* Listado de Gif */}
        <button onClick={ onAddCategory }>Agregar Categoria</button>
        <ol>
          {
            categories.map( category => {
              return <li key={ category }>{category}</li>
            })
          }
        </ol>
          {/* Gif Item */}

    </>
  )
}
