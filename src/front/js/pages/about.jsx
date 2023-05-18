import React from "react";
import { Link } from "react-router-dom";
import VVVERSIONSLOGONEGROMOBILE from "../../img/VVVERSIONSLOGONEGROMOBILE.png";
import pedro from "../../img/pedro.jpg";
import chris from "../../img/chris.jpg";
import rex1 from "../../img/rex1.jpg";

export const About = () => {
  return (
    <div>
      <div className="container p-2 text-center about p-5 ">
        <div className="ms-3 mt-1 aboutme">
          <h1 className="aboutmetxt">About us</h1>
        </div>
        <div>
          {" "}
          <h5>
            Presentamos VVVERSIONS, la innovadora aplicación diseñada para
            músicos, que ofrece una solución eficiente y organizada para el
            proceso creativo de cada canción. Sabemos que; el proceso de
            producción musical es complejo y a menudo disperso, con una
            comunicación descentralizada a través de diferentes canales y
            plataformas. Con VVVersions, puede unificar y simplificar todo el
            proceso creativo de sus canciones, recopilando y ordenando todas las
            versiones y revisiones con un ID único, fechas, actualizaciones y
            comentarios. Nuestra aplicación es una solución valiosa y escasa en
            el mercado musical actual. Simplifique su proceso creativo musical
            con VVVersions.
          </h5>
        </div>
        <div className="col-12 d-flex p-2 text-start">
          <img src={pedro} className="pedro"></img>
          <div className="p-3 mt-1">
            <b>Pedro Barrera</b>, Ing. Mecánico ULA, Empresario en Construcción
            y área de Implantes Médicos.{" "}
            <i>
              "Mi experiencia en 4Geeks ha sido enriquecedora en grado sumo,
              contando con personal muy calificado en el área docente y con muy
              alto nivel en cuanto a los profesionales que atienden las
              mentorías, sin duda, es una comunidad que ofrece muchísimas
              ventajas. Disciplina, constancia y dedicación con seguridad, te
              traerán buenos resultados, Evolución constante".
            </i>
          </div>
        </div>
        <div className="col-12 text-end d-flex p-2">
          <div className="p-3 mt-1">
            <b>Christian Aránguiz</b>, VA bilingue, estudiante de la USB.{" "}
            <i>
              "Mi experiencia en 4geeks fue muy buena, Octavio y José siempre
              estuvieron presentes y dispuestos a ayudarnos, incluso fuera de su
              horario. El material del curso es de muy buena calidad y Octavio
              es un profesor con muy buena pedagogía, siempre paciente y
              dispuesto a explicarnos las cosas las veces necesarias. Tambien el
              ambiente del curso fue de camaradería y eso enriqueció la
              experiencia".
            </i>
          </div>
          <img src={chris} className="pedro"></img>
        </div>
        <div className="col-12 p-2 d-flex text-start">
          <img src={rex1} className="rex"></img>
          <div className="p-3 mt-1">
            <b>Reynaldo Goitia</b>, más conocido como Boston Rex, músico,
            abogado y fotógrafo, ahora orgullosamente formado en 4Geeks Academy.
            <i>"Mi experiencia en este bootcamp ha sido enriquecedora y estimulante,
            gracias a la dedicación y el apoyo de mentores y compañeros. Con
            gratitud hacia 4Geeks, Octavio, José y todos los que contribuyeron a
            mi formación, miro al futuro con entusiasmo para explorar y crecer
            en este nuevo campo. Cada tarde de aprendizaje será extrañada, pero
            con orgullo, me uno a la comunidad de geeks listo para enfrentar
            nuevos desafíos".</i>
          </div>
        </div>
      </div>

      <div className="">
        <Link to="/">
          <img src={VVVERSIONSLOGONEGROMOBILE} className="back2 p-2"></img>
        </Link>
      </div>
    </div>
  );
};
