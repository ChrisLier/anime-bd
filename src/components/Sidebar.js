import React from "react";
/* Mandamos variables de app.js */
export default function Sidebar({ proptopAnime }) {
  //Espacio para codigo JS
  return (
    <aside>
      <nav>
        <h3>Top Anime</h3>
        {proptopAnime.map((anime) => (
          /*_blank para que se abra en otra ventana, noreferrer para que no sepas de qué página viene*/
          <a
            key={anime.mal_id}
            href={anime.url}
            target="_blank"
            rel="noreferrer"
          >
            {anime.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}

//React Functional Component export
