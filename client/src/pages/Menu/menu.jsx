import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
const Menu = () => {
    const [pg, setpg] = useState(1);
    const [platos, setplatos] = useState()
    const selectPage = (e) => {
        setpg(e.target.value);
    };
    useEffect(() => {
        const fetchData = async () => {
            const url = `http://localhost:3000/platos`;
            const response = await fetch(url);
            const info = await response.json();
            setplatos(info);
        }
        if (pg) {
            fetchData();
        }
    }, [pg]);
    console.log(platos)

    return (
        <>
            <header>
                <div className="Titulo"></div>
            </header>
            <div className="menu">
                <div className="categorias">

                </div>
                <div className="platos">
                    {platos ? (
                        platos.map((plato) => (

                            <a href="product" className="card" key={plato.id}>
                                <div className="nombre">{plato.nombre_Plato}</div>
                                <div className="desc">{plato.descripcion_Plato}</div>
                                <div className="precio">{plato.precio}</div>
                                <div className="im">{plato.foto_Url}</div>
                            </a>

                        ))
                    ) : (
                        <div>cargando</div>
                    )}
                </div>
            </div>
        </>
    )
}
export default Menu