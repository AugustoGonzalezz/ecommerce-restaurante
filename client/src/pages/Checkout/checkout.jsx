import React, { useState, useEffect } from 'react';
import styles from './checkout.module.css'; // Importamos los estilos como módulo CSS
import Header from '../../components/Header/header.jsx'
import Footer from '../../components/Footer/footer.jsx'
const Checkout = () => {
  // Estado para guardar los platos en el carrito
  const [carrito, setCarrito] = useState([]);

  // Cargar el carrito desde localStorage cuando el componente se monta
  useEffect(() => {
    const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));
    if (carritoGuardado) {
      setCarrito(carritoGuardado);
    }
  }, []);

  // Calcular el total del carrito
  const total = carrito.reduce((acc, plato) => acc + parseFloat(plato.precio), 0);

  return (
    <div className={styles.container}>
      <Header></Header>
      {/* Columna de los productos en el carrito */}
      <div className={styles.cartSummary}>
        <h2>Resumen de tu pedido</h2>
        <ul>
          {carrito.length > 0 ? (
            carrito.map((plato) => (
              <li key={plato.id}>
                <div className={styles.product}>
                  <span className={styles.productName}>{plato.nombre_Plato}</span>
                  <span className={styles.productPrice}>${plato.precio}</span>
                </div>
              </li>
            ))
          ) : (
            <li>No hay productos en el carrito.</li>
          )}
        </ul>
        <hr />
        <div className={styles.total}>
          <p><strong>Total:</strong> ${total.toFixed(2)}</p>
        </div>
      </div>

      {/* Columna para el formulario de pago */}
      <div className={styles.checkoutForm}>
        <h2>Detalles de pago</h2>
        <form action="#" method="post">
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre completo</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="address">Dirección</label>
            <input type="text" id="address" name="address" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="card">Número de tarjeta</label>
            <input type="text" id="card" name="card" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="expiry">Fecha de expiración</label>
            <input type="date" id="expiry" name="expiry" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" required />
          </div>
          <button type="submit" className={styles.btn}>Realizar pago</button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Checkout;
