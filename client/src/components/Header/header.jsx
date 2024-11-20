import React from 'react';
import styles from './header.module.css';
import { FaShoppingCart } from 'react-icons/fa'; // Icono del carrito, usando react-icons

const Header = ({ cartItemCount }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>Mirador Nocturno</h1>
      </div>
      <div className={styles.cart}>
        <FaShoppingCart className={styles.cartIcon} />
        {cartItemCount > 0 && (
          <span className={styles.cartCount}>{cartItemCount}</span>
        )}
      </div>
    </header>
  );
};

export default Header;
