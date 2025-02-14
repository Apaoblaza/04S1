import React from 'react'
import "./NotFound.css"
import tmntImage from "../assets/img/tmnt.jpg"

const NotFound = () => {
  return (
    <div className="notFound">
        <h1 className="text-white">Error 404: Página no encontrada</h1>
        <h2 className="text-white">La pizza que buscabas se la llevaron unas tortugas!</h2>
        <img src={tmntImage}/>


    </div>
  )
}

export default NotFound