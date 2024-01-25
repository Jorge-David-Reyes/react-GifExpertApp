import { useState } from "react"

export const GifExpertApp = () => {

  /* Hook listado de categorias */
  const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}

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
