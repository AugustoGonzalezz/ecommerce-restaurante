import React, { useState, useEffect } from 'react';
import styles from './cart.module.css'; // Asegúrate de tener un archivo CSS para el carrito

const Cart = () => {
    const [carrito, setCarrito] = useState([]);

    // Cargar carrito desde localStorage al iniciar
    useEffect(() => {
        const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
        if (carritoGuardado) {
            setCarrito(carritoGuardado);
        }
    }, []);

    // Función para eliminar un plato del carrito
    // Función para eliminar un plato del carrito
const eliminarDelCarrito = (platoId) => {
    // Filtrar el carrito para eliminar solo el plato con el id especificado
    const nuevoCarrito = carrito.filter(plato => plato.ID_PLATO !== platoId);

    setCarrito(nuevoCarrito);  // Actualizar el estado del carrito

    // Guardar el carrito actualizado en localStorage
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
};

    


    // Calcular el total del carrito
    const calcularTotal = () => {
        return carrito.reduce((total, plato) => total + plato.precio, 0).toFixed(2);
    };

    return (
        <div className={styles.container}>
            <h2>Tu Carrito</h2>
            <div className={styles.carritoItems}>
                {carrito.length === 0 ? (
                    <p>Tu carrito está vacío.</p>
                ) : (
                    carrito.map(plato => (
                        <div key={plato.id} className={styles.card}>
                            <div className={styles.imagen}>
                                <img src={plato.foto_Url} alt={plato.nombre_Plato} />
                            </div>
                            <div className={styles.info}>
                                <h3>{plato.nombre_Plato}</h3>
                                <p>{plato.descripcion_Plato}</p>
                                <p><strong>Precio:</strong> ${plato.precio}</p>
                            </div>
                            <button 
                                className={styles.eliminarBtn} 
                                onClick={() => eliminarDelCarrito(plato.ID_PLATO)}
                            >
                                Eliminar
                            </button>
                        </div>
                    ))
                )}
            </div>

            {carrito.length > 0 && (
                <div className={styles.total}>
                    <h3>Total: ${calcularTotal()}</h3>
                    <button className={styles.pagoBtn}>Ir a Pagar</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
