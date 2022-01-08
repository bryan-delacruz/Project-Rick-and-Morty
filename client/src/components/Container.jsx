import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../components/Card";
import "../css/Container.css";

import { getCharacters } from "../redux/actions";

const Container = () => {
  const dispatch = useDispatch();

  let characters = useSelector((state) => state.characters);
  let filterCharacters = useSelector((state) => state.filterCharacters);

  if (filterCharacters.length > 0) {
    characters = filterCharacters;
  }

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <main className="container-card">
      {characters.map((e) => (
        <Card
          key={e.id}
          id={e.id}
          name={e.name}
          image={e.image}
          species={e.species}
          status={e.status}
          gender={e.gender}
          episode={e.episode}
        />
      ))}
    </main>
  );
};

export default Container;
