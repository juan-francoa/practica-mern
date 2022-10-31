import React from 'react'

export default function NombreFoto(props) {
    let {name, img} = props
  return (
    <>
        <h2 className='titulo white flex j-center a-center'>{name}</h2>
      <img src={img} alt='sujeto1' className='photo' />
    </>
  )
}
