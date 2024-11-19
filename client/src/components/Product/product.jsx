import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import styles from '../../pages/Menu/menu.module.css'
const product = (plato) => {

    return (
        <>

                <a href="product" className={styles.card} key={plato.id}>
                  <div className={styles.nombre}>{plato.nombre_Plato}</div>
                  <div className={styles.desc}>{plato.descripcion_Plato}</div>
                  <div className={styles.precio}>{plato.precio}</div>
                  <div className={styles.im}>
                    <img src={plato.foto_Url} alt={plato.nombre_Plato} />
                  </div>
                </a>



        </>
    )
}
export default product