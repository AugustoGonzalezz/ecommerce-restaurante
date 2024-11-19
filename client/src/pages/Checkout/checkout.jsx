import React from 'react';
import styles from './checkout.module.css'; // Importamos los estilos como módulo CSS

const Checkout = () => {
  return (
    <div className={styles.container}>
      {/* Columna de los productos en el carrito */}
      <div className={styles.cartSummary}>
        <h2>Resumen de tu pedido</h2>
        <ul>
          <li>
            <div className={styles.product}>
              <span className={styles.productName}>Producto 1</span>
              <span className={styles.productPrice}>$25.00</span>
            </div>
          </li>
          <li>
            <div className={styles.product}>
              <span className={styles.productName}>Producto 2</span>
              <span className={styles.productPrice}>$15.00</span>
            </div>
          </li>
          <li>
            <div className={styles.product}>
              <span className={styles.productName}>Producto 3</span>
              <span className={styles.productPrice}>$10.00</span>
            </div>
          </li>
        </ul>
        <hr />
        <div className={styles.total}>
          <p><strong>Total:</strong> $50.00</p>
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
    </div>
  );
};

export default Checkout;
