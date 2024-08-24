import { useEffect, useRef } from "react";
import React from "react";
import './secondary.css';
import Image from "./teens.jpeg";


const Highschool = () => {
    const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
        if (imgRef.current) {
            const scrollPosition = window.pageYOffset;
            const maxScrollPosition = window.innerHeight - imgRef.current.offsetHeight;
            const scrollPercentage = scrollPosition / maxScrollPosition;
            const scaleFactor = 1 - (scrollPercentage * 0.8);
            imgRef.current.style.transform = `scale(${scaleFactor})`;
          }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="max-w-6xl mx-auto p-4"> {/* Set the maximum width for the entire content */}
            <img
                src={Image}
                alt="school"
                className="school-img"
                ref={imgRef}
            />
            <div className="title">
                <h1>PROGRAMME SECONDAIRE</h1>
            </div>

            {/* Secondary Program Information */}
            <section className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-700">
                    Dès la rentrée de Septembre 2026, C.S KIM'S ouvrira des classes de secondaire en suivant un programme British et un programme congolais répondant à des standards internationaux, unique du fait de ses normes pédagogiques et personnelles rigoureuses.
                </p>

                <h2 className="text-3xl font-semibold text-orange-600">Le Programme :</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>est conçu pour contribuer de manière globale au bien-être intellectuel, social, émotionnel et physique des élèves;</li>
                    <li>fournit aux élèves des occasions de développer les connaissances, attitudes et compétences dont ils ont besoin pour gérer des situations complexes et agir de manière responsable dans le futur;</li>
                    <li>assure l’ampleur et la profondeur de leur compréhension grâce à l’étude de huit groupes de matières : Langues, littérature, Individus et sociétés (social), Sciences, Mathématiques, Arts, Éducation physique et à la santé, et Design;</li>
                    <li>A travers les groupes de matières, les apprenants seront aussi exposés à des connaissances en matière d’entreprenariat, de conservation de la nature, de gestion de l’environnement, d’agro-business, …;</li>
                    <li>requiert l’étude d’au moins deux langues (français & anglais) pour soutenir la compréhension des élèves de leur propre culture et de celle des autres;</li>
                    <li>permet aux élèves de participer à l’entraide au sein de la communauté;</li>
                    <li>aide à préparer les élèves à poursuivre leurs études, à entrer dans le monde du travail et à apprendre tout au long de leur vie.</li>
                </ul>
            </section>
        </div>
  );
};

export default Highschool;
