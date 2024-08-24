import React from "react";
import "./primary.css";
import { useEffect, useRef } from 'react';

const School = () => {
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
        src="https://www.essence.com/wp-content/uploads/2015/12/images/2015/12/10/classroom.jpg"
        alt="school"
        className="school-img"
        ref={imgRef}
    />
    <div className="title">
        <h1>MATERNEL & PRIMAIRE</h1>
    </div>

    {/* Content Section */}
    <section className="space-y-6">
        <p className="text-lg leading-relaxed text-gray-700">
            Nous encourageons les élèves à donner le meilleur d’eux-mêmes dans leurs études et leur développement personnel. Nos programmes s’efforcent d’éveiller chez les élèves un désir d’apprendre tout au long de leur vie en faisant preuve d’enthousiasme et d’empathie mais aussi pour qu’en grandissant, ils soient à même de prendre des décisions éthiques et de se joindre à d’autres pour célébrer les liens qui unissent entre eux les humains, mais aussi de les préparer à appliquer les connaissances et compétences acquises dans des situations réelles, complexes et imprévisibles.
        </p>

        <h2 className="text-3xl font-semibold text-orange-600">Nos Programmes :</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>sont centrés sur les apprenants. En accordant une place centrale aux élèves, ils encouragent les relations saines, la responsabilité éthique et les défis personnels;</li>
            <li>développent des approches de l’enseignement et de l’apprentissage efficaces. Ils aident les élèves à développer les attitudes et compétences nécessaires à leur réussite scolaire et à leur épanouissement personnel;</li>
            <li>s’intègrent dans des contextes mondiaux. Ils permettent aux élèves d’améliorer leur compréhension des langues et des cultures, et d’examiner des idées et des questions d’importance mondiale;</li>
        </ul>

        <p className="text-lg leading-relaxed text-gray-700">
            À travers les programmes, les élèves explorent des contenus exigeants et importants. Les apprenants de KIS s’efforcent de devenir des investigateurs, des penseurs et des communicateurs, mais aussi des individus informés et instruits, intègres, ouverts d’esprit, altruistes, audacieux, équilibrés et réfléchis. Ces qualités représentent une large gamme d’aptitudes et de responsabilités humaines qui vont au-delà du développement intellectuel et de la réussite scolaire.
        </p>

        <p className="text-lg leading-relaxed text-gray-700">
            Pour chaque niveau, KIM'S met à disposition une salle de classe qui répond aux exigences pédagogiques de nos programmes. Le matériel didactique et les activités sont adaptés à chaque année d’apprentissage.
        </p>

        <p className="text-lg leading-relaxed text-gray-700">
            Les élèves du cycle maternel ont une cour de récréation séparée de ceux du primaire. Ils effectuent des visites en bibliothèque et sont exposés à 1h de langue locale par semaine. Le programme scolaire annuel est communiqué aux parents en début d’année.
        </p>
    </section>
</div>
  );
};

export default School;
