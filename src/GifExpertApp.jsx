import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  /* Hook listado de categorias */
  const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);

  const onAddCategory = (newCategory) => {
      if ( categories.includes( newCategory ) ) return;

      /* Sintaxis Spread ...categories */
      //setCategories(['Valorant', ...categories]);
      setCategories([newCategory, ...categories]);

      /* Recibiendo el estado anterior */
      /*setCategories(cat => [...cat, 'Valorant']);*/
  }

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
          //setCategories={ setCategories }
          //onNewCategory={ (event) => onAddCategory(event) }
          onNewCategory={ (value) => onAddCategory(value) } 
        />

        {/* Listado de Gif */}
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
