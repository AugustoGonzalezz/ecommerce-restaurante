import React, { useState, useEffect } from 'react';
import styles from './menu.module.css';

const Menu = () => {
    const [pg, setpg] = useState(1);
    const [platos, setplatos] = useState([]);
    const [carrito, setCarrito] = useState([]);

    // Función para manejar el cambio de página (si es necesario)
    const selectPage = (e) => {
        setpg(e.target.value);
    };

    // Cargar los datos de los platos
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

    // Cargar carrito desde localStorage al iniciar
    useEffect(() => {
        const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
        if (carritoGuardado) {
            setCarrito(carritoGuardado);
        }
    }, []);

    // Función para agregar un plato al carrito
    const agregarAlCarrito = (plato) => {
        const nuevoCarrito = [...carrito, plato];
        setCarrito(nuevoCarrito);

        // Guardar el carrito en localStorage
        localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    };

    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <h2>Categorías</h2>
                <ul className={styles.categories}>
                    {/* Lista de categorías */}
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
                        {platos.length > 0 ? (
                            platos.map((plato) => (
                                <div className={styles.card} key={plato.id}>
                                    <div className={styles.nombre}>{plato.nombre_Plato}</div>
                                    <div className={styles.desc}>{plato.descripcion_Plato}</div>
                                    <div className={styles.precio}>{plato.precio}</div>
                                    <div className={styles.im}>
                                        <img src={plato.foto_Url} alt={plato.nombre_Plato} />
                                    </div>
                                    <button 
                                        className={styles.btnAgregar} 
                                        onClick={() => agregarAlCarrito(plato)}
                                    >
                                        Agregar al Carrito
                                    </button>
                                </div>
                            ))
                        ) : (
                            <div className={styles.loading}>Cargando...</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;