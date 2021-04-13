import React from "react";
import AnimeCard from "./AnimeCard";
/*Desestructuracion sirve para  pasar valores*/
export default function MainContent({
  setSearch,
  search,
  buscar,
  listaAnimes,
}) {
  return (
    <main>
      <div className="main-head">
        {/* onSubmit hace algo con enter */}
        <form className="search-box" onSubmit={buscar}>
          {/* Recogemos el valor del input */}
          <input
            type="search"
            placeholder="Busca un anime"
            required
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
      </div>
      <div className="anime-list">
        {listaAnimes.map((anime) => (
          <div className="anime-card" key={anime.mal_id}>
            <AnimeCard anime={anime} />
          </div>
        ))}
      </div>
    </main>
  );
}
