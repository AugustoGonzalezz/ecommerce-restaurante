import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
    return (
    <>
        <div class="index">
        <div class="portada">
            <div class="saludo">
                <h2>Buenos Dias Juana!</h2>
                <h5>es hora de almorzar</h5>
            </div>
            <div class="buscador">
                <div class="icono"><i class="iconos">fmd_good</i> </div>
            </div>
        </div>
        <nav class="categorias">
            <a href="" class="btn_categoria">
                <i class="iconos f25">lunch_dining</i>
                Lunch
            </a>
            <a href="" class="btn_categoria">
                <i class="iconos f25">local_cafe</i>
                coffee
            </a>
            <a href="" class="btn_categoria">
                <i class="iconos f25">liquor</i>
                Liqour
            </a>
            <a href="" class="btn_categoria">
                <i class="iconos f25 ">bakery_dining</i>
                Bakery
            </a>
            <a href="" class="btn_categoria">
                <i class="iconos f25">ramen_dining</i>
                Ramen
            </a>
            <a href="" class="btn_categoria">
                <i class="iconos f25">icecream</i>
                Icecream
            </a>
            <a href="" class="btn_categoria">
                <i class="iconos f25">local_pizza</i>
                Pizza
            </a>
            <a href="" class="btn_categoria">
                <i class="iconos f25">tapas</i>
                Tapas
            </a>
            <a href="" class="btn_categoria">
                <i class="iconos f25">lunch_dining</i>
                Lunch
            </a>
            <a href="" class="btn_categoria">
                <i class="iconos f25">local_cafe</i>
                coffee
            </a>
            <a href="" class="btn_categoria">
                <i class="iconos f25">liquor</i>
                Liqour
            </a>
            <a href="" class="btn_categoria">
                <i class="iconos f25 ">bakery_dining</i>
                Bakery
            </a>
            <a href="" class="btn_categoria">
                <i class="iconos f25">ramen_dining</i>
                Ramen
            </a>
            <a href="" class="btn_categoria">
                <i class="iconos f25">icecream</i>
                Icecream
            </a>
            <a href="" class="btn_categoria">
                <i class="iconos f25">local_pizza</i>
                Pizza
            </a>
            <a href="" class="btn_categoria">
                <i class="iconos f25">tapas</i>
                Tapas
            </a>
        </nav>
    </div>
    <main class="index">
        <span class="titulo">OFFERS</span>
        <section class="offers" id="resto">
        </section>
    </main>
    <a id="${e.name}" class="restaurante">
        <article class="oferta">
            <div class="img">
                
                <span></span>
            </div>
            <div class="desc">
                <h2></h2>
                <span></span>
                <span></span>
                <div class="stats">
                    <div class="estrellas">
                       <span class="iconos verde f13">star</span>
                       <span class="iconos f13">star</span>
                       <span></span>
                    </div>
                    <div class="valor">
                        <span class="iconos verde f13">euro_symbol</span>
                        <span class="iconos f13">euro_symbol</span>
                    </div>
                </div>
            </div>
            <div class="calificacion"></div>
        </article>
    </a>
    </>
    )
}
