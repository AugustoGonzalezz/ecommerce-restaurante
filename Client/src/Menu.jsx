import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
    <>
        <div> Menu </div>
        <ul>
            <li>
                <Link to="/BuscarPoke"> Buscar pokemon por nombre</Link>
            </li>
            <li>
                <Link to="/DragonballZ"> Mostrar personajes de dragon ball Z</Link>
            </li>
            <li>
                <Link to="/Rickymorty"> Listado de personajes de rickymorty</Link>
            </li>
        </ul>
    </>
    )
}
