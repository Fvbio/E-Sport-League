import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const InfoTournois = () => {
  const { id } = useParams();

  const [tournamentData, setTournamentData] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/game/${id}`)
      .then((response) => {
        setTournamentData(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données du tournoi:",
          error
        );
      });
  }, [id]);

  return (
    <div className="InfoTournois">
      {tournamentData && (
        <div className="tournament-info">
          <div className="title-image">
            <h2 className="about-item-title">{tournamentData.title}</h2>
            <img
              src={tournamentData.picture}
              alt={tournamentData.alt}
              className="tournament-image"
            />
          </div>
          <div className="details">
            <h3>Description du jeu :</h3>
            <p>{tournamentData.description}</p>
            <h3>Information concernant le tournoi :</h3>
            <p>Date : {tournamentData.date}</p>
            <p>Horaire : {tournamentData.schedule}</p>
            <p>Adresse : {tournamentData.address}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoTournois;
