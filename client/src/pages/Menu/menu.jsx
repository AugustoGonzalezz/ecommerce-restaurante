import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import styles from './menu.module.css'
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
            <div className={styles.container}>
      <div className={styles.sidebar}>
        <h2>Categorías</h2>
        <ul className={styles.categories}>
          <li><a href="#" className={styles.category} data-category="pizzas">Pizzas</a></li>
          <li><a href="#" className={styles.category} data-category="hamburguesas">Hamburguesas</a></li>
          <li><a href="#" className={styles.category} data-category="ensaladas">Ensaladas</a></li>
          <li><a href="#" className={styles.category} data-category="tacos">Tacos</a></li>
          <li><a href="#" className={styles.category} data-category="pollo">Pollo</a></li>
          <li><a href="#" className={styles.category} data-category="sopas">Sopas</a></li>
          <li><a href="#" className={styles.category} data-category="pasta">Pasta</a></li>
          <li><a href="#" className={styles.category} data-category="postres">Postres</a></li>
        </ul>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.bienvenida}>Bienvenido al Menú</div>
        <div id="menu-items" className={styles.menuItems}>
          <div className={styles.platos}>
            {platos ? (
              platos.map((plato) => (
                <a href="product" className={styles.card} key={plato.id}>
                  <div className={styles.nombre}>{plato.nombre_Plato}</div>
                  <div className={styles.desc}>{plato.descripcion_Plato}</div>
                  <div className={styles.precio}>{plato.precio}</div>
                  <div className={styles.im}>
                    <img src={plato.foto_Url} alt={plato.nombre_Plato} />
                  </div>
                </a>
              ))
            ) : (
              <div className={styles.loading}>Cargando...</div>
            )}
          </div>
        </div>
      </div>
    </div>


        </>
    )
}
export default Menu