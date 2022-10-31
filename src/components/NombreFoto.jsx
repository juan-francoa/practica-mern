import React from 'react'

export default function NombreFoto(props) {
    let {category, image} = props
  return (
    <>
        <h2 className='titulo white flex j-center a-center'>{category}</h2>
      <img src={image} alt='sujeto1' className='photo' />
    </>
  )
}
