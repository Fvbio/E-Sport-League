import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


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
            <Link to={`/tournoi/${value.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <h4 className="about-item-title">{value.title}</h4>
              <img src={value.picture} alt={value.alt} />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Tournament;

