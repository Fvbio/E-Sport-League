import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tournament = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // requête GET pour récupérer les données depuis le serveur JSON
    axios.get('http://localhost:3000/game')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, []); 

  return (
    <div className="Tournament">
      {data.map((value, index) => {
        return (
          <article className={value.title} key={index}>
            <a href={value.link}>
              <h4 className="about-item-title">{value.title}</h4>
              <img src={value.picture} alt={value.alt} />
            </a>
          </article>
        );
      })}
    </div>
  );
};

export default Tournament;

