import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

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
        <h1>GifExpertApp</h1>

        <AddCategory 
          onNewCategory={ (value) => onAddCategory(value) } 
        />

          {
            categories.map( category => (
              //return <li key={ category }>{category}</li>
              /*
                <div key={category}>
                  <h3>{ category }</h3>
                  <li>{ category }</li>
                </div>
              )
              */
             
              <GifGrid key={(category)} category = { category }/>
             )
            )
          }
    </>
  )
}
