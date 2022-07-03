import React from "react";
import "typeface-fascinate";
import "typeface-kalam";
import "typeface-economica";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Home() {
  return (
    <div class="container">
      <div class="header orientation">
        <img class="white-cat" src="../imgs/white-cat.png" />
        <h1>¡Ana's Portfolio!</h1>

        <img class="black-cat" src="../imgs/black-cat.png" />
      </div>

      <div class="left-menu">
        <img class="profile" src="../imgs/profile.png" alt="Profile Image" />
        <ul>
          <li>
            <a href="#about">Sobre mi</a>
          </li>
          <li>
            <a href="#estudios">Mis estudios</a>
          </li>
          <li>
            <a href="#miexperiencia">Mi experiencia</a>
          </li>
          <li>
            <a href="#misconocimientos">Mis conocimientos</a>
          </li>
          <li>
          <a href="#proyectos">Mis proyectos</a>
          </li>
        </ul>
        <div class="contactos">
          <h4>¿Quieres saber más?</h4>
          <div class="contact-icons">
            <a href="https://www.linkedin.com/in/ana-jover/" target="_blank">
              <i class="linkedin fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/anajover" target="_blank">
              <i class="github fa-brands fa-github"></i>
            </a>
            <a href="mailto:anab.jover@gmail.com">
              <i class="email fa-solid fa-envelope"></i>
            </a>
            <a href="https://calendly.com/anab-jover" target="_blank">
              <i class="calendar fa-solid fa-calendar"></i>
            </a>
          </div>
        </div>
      </div>

      <a name="about"></a>
      <div class="details">
            <div id="aboutme">
            <h1 class="name-font">ANA BELÉN JOVER BALLESTER</h1>
            <p>
                Nacida y crecida en Alicante. Me mudé a los 27 años a Barcelona tras
                estar trabajando durante 5 años en un McDonalds y queriendo aspirar
                a más.
                <br />
                Llevo viviendo en Barcelona casi 15 años. Me gusta la música en
                vinilo, leer (ciencia ficción, fantasía y terror sobre todo), los
                videojuegos, los cómics, dibujar, el cine, los animales y diseñar
                páginas web cuando me aburro.
                <br />
                Empecé a hacer mis diseños como hobby en la época en la que se
                llevaban de moda los webblogs, y todavía se usaba el FrontPage, para
                después pasarme al entorno gráfico de Dreamweaver y acabando por
                usar el mismo programa pero centrándome más en la programación.
                <br />
                Siempre me ha encantado la informática, y aunque es algo que me
                sigue apasionando con locura, no ha pasado lo mismo con mi trabajo.
                Habiéndome estancado en mi vida profesional, acabando aborreciendo
                un poco lo que hago, y aprovechando que la vida me ha dado la
                oportunidad de reorientar mi carrera profesional, decidí convertirme
                en algo que, como he dicho anteriormente, siempre me había
                encantado: Desarroladora web fullstack.
            </p>
            </div>

            <div id="estudios">
            <br /><br /><br /><br /><br />
            <h1>Mis estudios</h1>

            <div class="card card-2">
                <div class="card__icon">
                <i class="fa-solid fa-computer"></i>
                </div>
                <article class="card__title">
                <h2>
                    Instituto de enseñanza secundaria "Mare Nostrum" de Alicante.
                </h2>
                <p>1998 - 2000</p>
                <p>Técnico especialidad de Informática</p>
                </article>
            </div>

            <div class="card card-5">
                <div class="card__icon">
                <i class="fa-solid fa-window-restore"></i>
                </div>
                <article class="card__title">
                <h2>IronHack Full-Time Bootcamp, Barcelona.</h2>
                <p>Abril - Junio 2022</p>
                <p>Full Stack Web Developer</p>
                </article>
            </div>
            </div>

            <a name="miexperiencia"></a>
            <div id="experiencia">
            <br /><br /><br /><br />
            <h1>Mi experiencia</h1>
            <section class="timeline">
                <ul>
                <li>
                    <div>
                    <time class="date-odd">Julio 2019 - Julio 2022</time>
                    <h4 class="company-title">Adevinta Spain</h4>
                    <p class="company-description">
                        Dar soporte a todos los empleados de la empresa, así como la
                        preparación de equipos para nuevas incorporaciones y su
                        mantenimiento. Creación de scripts para las altas y bajas de
                        la empresa. Creación de altas, bajas, etc por medio de
                        Active Directory. Realizar la documentación en Confluence.
                    </p>
                    </div>
                </li>

                <li>
                    <div>
                    <time class="date-even">Febrero 2018 - Mayo 2019</time>
                    <h4 class="company-title">eDreams ODIGEO</h4>
                    <p class="company-description">
                        Soporte informático a todo el edificio, así como estar a
                        cargo de las reparaciones de los equipos de las
                        videoconferencias y streamings de la empresa. También me
                        encargaba del mantenimiento de todos los equipos instalados
                        en las televisiones de todos los pisos. Y poco antes de que
                        nos rescindieran a todos el contrato por un cambio de
                        empresa externa, me cambiaron de departamento y llevaba
                        soporte de equipos Mac, Linux y asuntos más enfocados a
                        proyectos.
                    </p>
                    </div>
                </li>

                <li>
                    <div>
                    <time class="date-odd">Junio 2014 - Noviembre 2016</time>
                    <h4 class="company-title">Nissan Motor Corporation</h4>
                    <p class="company-description">
                        Soporte técnico presencial a todos los trabajadores de la
                        fábrica de Nissan de Zona Franca. Preparación de usuarios y
                        equipos para las nuevas incorporaciones. Montaje y
                        mantenimiento de ordenadores, impresoras, sistema de redes.
                        Implantación de la nueva maquetación no sólo en la sede de
                        Zona Franca, sino trambién en la de Montcada y Puerto.
                    </p>
                    </div>
                </li>

                <li>
                    <div>
                    <time class="date-even">Marzo 2013 - Junio 2014</time>
                    <h4 class="company-title">Mossos D'esquadra - Les Corts</h4>
                    <p class="company-description">
                        Asistencia Técnica Onsite en la Comisaria de Los Mossos en
                        Les Corts. Mantemiento de los equipos informáticos,
                        resolución de incidencias. Instalación y mantenimiento del
                        cableado de red (tenían suelo técnico). Implantación del
                        nuevo sistema operativo a todos los equipos de la oficina.
                    </p>
                    </div>
                </li>
                </ul>
            </section>
            </div>

            <a name="misconocimientos"></a>
            <div id="conocimientos">
            <br /><br />
            <h1>Mis conocimientos</h1>
            <h2>Lenguajes de programación, librerías y frameworks:</h2>
            <br />
            <p class="habilidades">
            <i class="js fa-brands fa-js-square"></i>
            <img class="mongo" src="../imgs/mongodb-icon.png" height="50" />
            <i class="react fa-brands fa-react"></i>
            <img src="../imgs/ex-icon.png" height="50px" />
            <i class="node fa-brands fa-node"></i>
            <i class="html fa-brands fa-html5"></i>
            <i class="css fa-brands fa-css3-alt"></i>
            <img src="../imgs/handlebars-icon.png" height="50" />
            <i class="bootstrap fa-brands fa-bootstrap"></i>
            </p>
            <br />
            <h2>Control de Versiones:</h2>
            <p class="habilidades">
            <i class="git fa-brands fa-git-square"></i>
            <i class="github2 fa-brands fa-github"></i>
            </p>
            <br />
            <h2>Y otras como:</h2>
            <ul>
              <li>Instalación y mantenimiento de ordenadores.</li>
              <li>Photoshop</li>
              <li>3D Studio Max</li>
              <li>Active Directory</li>
              <li>Herramientas de ticketing</li>
              <li>Axios</li>
              <li>JSON</li>
              <li>Postman</li>
            </ul>
            </div>

            <div id="proyectos">
              <h1>Mis Proyectos</h1>
            
    <div class="misproyectos">
    <div class="projectcard">
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="185"
        image="../imgs/papalink.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" class="papa-title">
          Papa Link
        </Typography>
        <Typography variant="body2" color="text.secondary" class="papa-body">
          Videojuego de Scroll lateral. Avanzar matando enemigos mientras consigues puntos.
        </Typography>
      </CardContent>
      <CardActions>
        <form action="https://anajover.github.io/PapaLink/" target="_blank">
        <button type="submit" class="demo-button" >Demo</button>
        </form>
        <form action="https://github.com/anajover/PapaLink" target="_blank">
        <button type="submit" class="repo-button" >Repositorio</button>
        </form>
      </CardActions>
    </Card>
    </div>

    <div class="projectcard">
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="185"
        image="../imgs/ironterror.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" class="iron-title">
          Iron Blue Terror
        </Typography>
        <Typography variant="body2" color="text.secondary" class="iron-body">
          Crea, edita o busca y agrega tus películas de miedo favoritas.
        </Typography>
      </CardContent>
      <CardActions>
        <form action="https://iron-blue-terror.herokuapp.com/" target="_blank">
        <button type="submit" class="demo-button" >Demo</button>
        </form>
        <form action="https://github.com/anajover/Iron-BlueTerror" target="_blank">
        <button type="submit" class="repo-button" >Repositorio</button>
        </form>
      </CardActions>
    </Card>
    </div>

    <div class="projectcard">
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="185"
        image="../imgs/gamer-orbit.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" class="orbit-title">
          Gamer Orbit
        </Typography>
        <Typography variant="body2" color="text.secondary" class="orbit-body">
          Tu listado de videojuegos. Ordena por tipo: deseados, acabaos, a medias o sólo lo tienes pero ni siquiera lo has empezado a jugar.
        </Typography>
      </CardContent>
      <CardActions>
        <form action="https://gamer-orbit.netlify.app/" target="_blank">
        <button type="submit" class="demo-button" >Demo</button>
        </form>
        <form action="https://github.com/anajover/gamer-orbit-server" target="_blank">
        <button type="submit" class="repo-button-server">Repositorio Server</button>
        </form>
        <form action="https://github.com/anajover/gamer-orbit-client" target="_blank">
        <button type="submit" class="repo-button-client">Repositorio Client</button>
        </form>
      </CardActions>
    </Card>
    </div>

    </div>

            </div>

      </div>
    </div>
  );
}

export default Home;
