import React from 'react'

export default function Flechita(props) {
    let {verbo, estilo, onClick} = props
  return (
    <div className={`gray flecha ${estilo} flex j-center a-center`} onClick={onClick}> {verbo} </div>
  )
}
