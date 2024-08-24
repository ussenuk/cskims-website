// News.jsx

import React from 'react';

const schoolNews = [
  {
    id: 1,
    title: "Prochaine Conférence des parents et des enseignants",
    content: "Notre Conférence annuelle des parents et des enseignants se tiendra le 25 mars de 15 à 18 heures. C'est l'occasion pour les parents de rencontrer les enseignants, de discuter des progrès de leur enfant et d'aborder toute préoccupation.",
    date: "2024-03-15"
  },
  {
    id: 2,
    title: "Résultats des élections du Conseil des étudiants",
    content: "Félicitations aux membres nouvellement élus du Conseil étudiant! Nous souhaitons remercier tous les candidats pour leur participation et encourager tout le monde à soutenir les nouveaux membres du conseil alors qu'ils travaillent à améliorer notre communauté scolaire.",
    date: "2024-03-14"
  }
];

const News = () => {
  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Informations scolaire</h2>
      <ul>
        {schoolNews.map(newsItem => (
          <li key={newsItem.id} className="mb-8 border-b pb-4">
            <h3 className="text-xl font-semibold mb-2">{newsItem.title}</h3>
            <p className="text-gray-700 mb-2">{newsItem.content}</p>
            <p className="text-gray-500">Date: {newsItem.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default News;