// import data from "../data/about.json";
// import '../assets/css/style.css';

// const Tournament = () => {
//   return (
//     <div className="Tournament">
//       {data.map((value, index) => {
//         return (
//           <article className={value.title} key={index}>
//             <a href={value.link}>
//               <h4 className="about-item-title">{value.title}</h4>
//               <img src={value.picture} alt={value.description} />
//             </a>
//           </article>
//         );
//       })}
//     </div>
//   );
// };

// export default Tournament;

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assurez-vous d'avoir axios installé

const Tournament = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Effectuer une requête GET pour récupérer les données depuis le serveur JSON
    axios.get('http://localhost:3000/game')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, []); // Le tableau vide signifie que cela ne s'exécute qu'une fois, équivalent à componentDidMount dans les classes

  return (
    <div className="Tournament">
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

export default Tournament;

