import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const InfoTournois = () => {
  const { title } = useParams();
  const [tournamentData, setTournamentData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/game/${title}`)
      .then(response => {
        setTournamentData(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données du tournoi:', error);
      });
  }, [title]); 

  return (
    <div className="InfoTournois">
      {tournamentData && (
        <div>
          <h2 className="about-item-title">{tournamentData.title}</h2>
          <img src={tournamentData.picture} alt={tournamentData.alt} />
        </div>
      )}
    </div>
  );
};

export default InfoTournois;
