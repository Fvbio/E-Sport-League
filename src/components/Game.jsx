
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Game = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/game')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, []);

  return (
    <div className="Game">
      {data.map((value, index) => {
        return (
          <article className={value.title} key={index}>
            <a href={value.link}>
              <h4 className="about-item-title">{value.title}</h4>
              <img src={value.picture} alt={value.description} />
            </a>
          </article>
        );
      })}
    </div>
  );
};

export default Game;