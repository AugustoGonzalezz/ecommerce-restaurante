import React, { useState } from 'react';
import './sty.css';  // Asegúrate de que el archivo CSS esté correctamente vinculado en tu proyecto

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const categories = [
    { icon: 'ramen_dining', name: 'Ramen' },
    { icon: 'local_pizza', name: 'Pizza' },
    { icon: 'lunch_dining', name: 'Hamburguesa' },
    { icon: 'tapas', name: 'Tapas' },
    { icon: 'set_meal', name: 'Atun' },
    { icon: 'cookie', name: 'Galletita' },
    { icon: 'icecream', name: 'Helado' },
    { icon: 'egg_alt', name: 'Huevo Frito' },
    { icon: 'bakery_dining', name: 'Medialuna' },
    { icon: 'egg', name: 'Huevo Duro' },
    { icon: 'cake', name: 'Torta' },
    { icon: 'local_cafe', name: 'Cafe' },
    { icon: 'soup_kitchen', name: 'Sopa' },
    { icon: 'rice_bowl', name: 'Bola de arroz' },
    { icon: 'local_bar', name: 'Martini' },
    { icon: 'fastfood', name: 'Hamburguesa + Bebida' }
  ];

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <header>
        <section className="portada">
          <div className="saludo">
            <h2>Buenos dias, Sofia</h2>
            <h5>¿ Qué le apetece desayunar ?</h5>
          </div>

          <div className="buscador">
            <div className="icono">
              <span className="iconos">fmd_good</span>
            </div>
            <input 
              type="search" 
              placeholder="Search Restaurant" 
              value={searchQuery} 
              onChange={handleSearchChange} 
            />
            <input type="submit" className="iconos" value="search" />
          </div>
        </section>

        <nav className="categorias">
          {categories.map((category, index) => (
            <a href="#" key={index} className="btn-cat">
              <i className={`iconos f30 ${category.icon}`} />
              {category.name}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <h2 className="gris_txt">OFERTAS</h2><br />
        <section className="restaurantes">
          {/* Aquí irán los restaurantes que puedas agregar dinámicamente */}
        </section>
      </main>
    </div>
  );
};

export default App;
