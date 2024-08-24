import React from 'react';
import './scholarship.css'; 

function ScholarshipPage() {
  return (
    <div className="container">
      <header className="header">
        <img className='scholarship-img' src="https://www.filepicker.io/api/file/cyS02sRrmQxhuWn5PyMg" alt="Complexe Scolaire Kims" />
        <h1>Bourses d'études au Complexe Scolaire Kims</h1>
        <h2>Investir dans l'éducation, donner des pouvoirs à l'avenir</h2>
      </header>
      <div className="content">
        <section className="intro">
          <h2>Bienvenue à notre programme de bourses d'études</h2>
          <p>Chez Complexe Scolaire Kims, nous croyons à offrir des possibilités aux étudiants talentueux et motivés de poursuivre leur éducation sans obstacles financiers. Notre programme de bourses d'études vise à soutenir des étudiants exceptionnels qui démontrent l'excellence académique, le potentiel de leadership et l'engagement à avoir un impact positif dans leur communauté.</p>
        </section>
        <section className="eligibility">
          <h2>Critères d'éligibilité de la bourse</h2>
          <ul>
            <li>Vous devez être un étudiant actuel du Complexe Scolaire Kims</li>
            <li>Démontrer l'excellence académique</li>
            <li>Il doit montrer des qualités de leadership</li>
            <li>Il doit participer activement aux activités extracurriculaires</li>
            <li>Les besoins financiers peuvent être pris en considération</li>
          </ul>
        </section>
        <section className="application">
          <h2>Comment appliquer</h2>
          <p>Les étudiants intéressés doivent soumettre un formulaire de demande de bourse accompagné des documents suivants :</p>
          <ul>
            <li>Formulaire de demande complété</li>
            <li>Lettres de recommandation</li>
            <li>Prouve du besoin financier (le cas échéant)</li>
          </ul>
          <p>La date limite de dépôt des demandes de bourses est [Premiere semaine de l'annee scolaire]. Les demandes tardives ne seront pas prises en considération.</p>
        </section>
        <section className="contact">
          <h2>Contactez-nous</h2>
          <p>Si vous avez des questions concernant le programme de bourses d'études ou le processus de candidature, n'hésitez pas à nous contacter :</p>
          <p>Email: complexescolairekims@gmail.com</p>
          <p>Phone: +243 995840830</p>
        </section>
      </div>
     
    </div>
  );
}

export default ScholarshipPage;
