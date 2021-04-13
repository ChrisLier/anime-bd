import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

/*Aquí importamos y agregamos todos los componentes*/
function App() {
  //hooks -> react functional components
  //Ayudan para que la aplicacion sea mas versatil
  //Va a guardar un arreglo en teuseSta
  //Set es como un set y get
  const [topAnime, setTopAnime] = useState([]);
  const [busqueda, setBusqueda] = useState(""); //Obtener valor de la busqueda, default nada
  const [listaAnime, setListaAnime] = useState([]); //Arreglo vacio para guardar busquedas
  //Función de la flecha, para usando la api jalar la direccion
  //Async para siempre que hagamos peticiones a API
  //await espera a que se resuelva para continuar
  const ObtenerTopAnime = async () => {
    const respuesta = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    );

    /*Pasa los datos a un formato JSON*/
    const datos = await respuesta.json();
    setTopAnime(
      datos.top.slice(0, 50)
    ); /* Que nos de los primeros 5 elementos anime */
  };

  /* Le quitamos el recargo con preventDefault */
  const buscar = (e) => {
    e.preventDefault();
    obtenerAnimeBuscado(busqueda);
    setBusqueda(""); /* Para borrar el input despues de el enter */
  };

  /* Async por que se lo edimo al backend y recibe parametro*/
  const obtenerAnimeBuscado = async (query) => {
    const respuesta = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&oder_by=title&sort=asc&limit=10`
    );
    const datos = await respuesta.json(); //Los pasamos a json
    setListaAnime(datos.results);
    /* Renderizar los datos para mostrarlos en pantalla  */
  };

  /*Cada que el componente cargue se ejecuta esrecibeto */
  useEffect(
    () => {
      ObtenerTopAnime();
    },
    [] //Arreglo de dependencias
  );

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        {/*Le pasamos a Sidebar cosas de otros componentes*/}
        <Sidebar proptopAnime={topAnime} />
        {/* Mandamos las dos variables setter y getter*/}
        <MainContent
          setSearch={setBusqueda}
          search={busqueda}
          buscar={buscar}
          listaAnimes={listaAnime}
        />
      </div>
    </div>
  );
}

export default App;
