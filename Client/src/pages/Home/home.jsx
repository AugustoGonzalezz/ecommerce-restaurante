import React, { useState, useEffect } from 'react';
import './style.css';  // Asegúrate de que el archivo CSS esté correctamente vinculado en tu proyecto

const App = () => {
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
    <div className='contenedor'>
      <header>
        <section class="portada">
          <div class="saludo">
            <h2>Buenos dias, Sofia</h2>
            <h5>¿ Que le apetece desayunar ?</h5>
          </div>

          <div class="buscador">
            <div class="icono">
              <span class="iconos">
                fmd_good
              </span>
            </div>
            <input type="search" placeholder="Search Restaurant" />
            <input type="submit" class="iconos" value="search" />
          </div>
        </section>
        <nav class="categorias">
          <a href="https://google.com" class="btn-cat">
            <i class="iconos f30">
              ramen_dining
            </i>
            Ramen
          </a>

          <a href="#" class="btn-cat">
            <i class="iconos f30">
              local_pizza
            </i>
            Pizza
          </a>

          <a href="#" class="btn-cat">
            <i class="iconos f30">
              lunch_dining
            </i>
            Hamburguesa
          </a>

          <a href="#" class="btn-cat">
            <i class="iconos f30">
              tapas
            </i>
            Tapas
          </a>

          <a href="#" class="btn-cat">
            <i class="iconos f30">
              set_meal
            </i>
            Atun
          </a>

          <a href="#" class="btn-cat">
            <i class="iconos f30">
              cookie
            </i>
            Galletita
          </a>

          <a href="#" class="btn-cat">
            <i class="iconos f30">
              icecream
            </i>
            Helado
          </a>

          <a href="#" class="btn-cat">
            <i class="iconos f30">
              egg_alt
            </i>
            Huevo Frito
          </a>

          <a href="#" class="btn-cat">
            <i class="iconos f30">
              bakery_dining
            </i>
            Medialuna
          </a>

          <a href="#" class="btn-cat">
            <i class="iconos f30">
              egg
            </i>
            Huevo Duro
          </a>

          <a href="#" class="btn-cat">
            <i class="iconos f30">
              cake
            </i>
            Torta
          </a>

          <a href="#" class="btn-cat">
            <i class="iconos f30">
              local_cafe
            </i>
            Cafe
          </a>

          <a href="#" class="btn-cat">
            <i class="iconos f30">
              soup_kitchen
            </i>
            Sopa
          </a>

          <a href="#" class="btn-cat">
            <i class="iconos f30">
              rice_bowl
            </i>
            Bola de arroz
          </a>

          <a href="#" class="btn-cat">
            <i class="iconos f30">
              local_bar
            </i>
            Martini
          </a>

          <a href="#" class="btn-cat">
            <i class="iconos f30">
              fastfood
            </i>
            Hamburguesa + Bebida
          </a>
        </nav>
      </header>
      <main>
        <h2 class="gris_txt">OFERTAS</h2><br />
        <section class="restaurantes">
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
        </section>
      </main>
    </div>
  );
};

export default App;
