import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router-dom";
import { getCharacters } from "../redux/actions";

const CardDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const characters = useSelector((state) => state.characters);
  let character = characters.find((e) => e.id === parseInt(id));

  // console.log("componente", character);

  useEffect(() => {
    // console.log("useEffect");

    dispatch(getCharacters());
  }, [dispatch]);

  // console.log("return", character);

  return (
    <>
      {character ? (
        <main className="container-card">
          <div className="card">
            <img src={character.image} alt="avatar" />
            <h2>{character.name}</h2>
            <h3>{character.species}</h3>
            <div>
              <div>{character.status}</div>
              <div>{character.gender}</div>
              <div>{character.episode.join(", ")}</div>
            </div>
          </div>
        </main>
      ) : null}
    </>
  );
};

export default CardDetail;
