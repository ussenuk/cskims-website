import React, { useEffect, useRef } from 'react';
import "./primary.css";
import Image1 from '../Images/logo1.jpg';

export default function About() {
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
                <h1>INFOS GÉNÉRALES</h1>
            </div>

            {/* Infrastructures et Localisation */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold text-orange-600">Infrastructures et Localisation</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                    Le complexe scolaire est situé à l’Est de la RD Congo, dans la ville de Goma dans le quartier de Keshero. D’une superficie d’environ un hectare au bord du lac Kivu, l’école offre des aires récréatives et de détente, des espaces culturels et un grand nombre de salles de classe ainsi que des locaux destinés au corps pédagogique.
                </p>
                <div>
                    <h2 className="text-3xl font-semibold text-orange-600">Les infrastructures de l’école :</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg">
                        <li>12 salles de classe</li>
                        <li>1 auditoire pour 100 personnes</li>
                        <li>1 salle d’exposition</li>
                        <li>1 infirmerie</li>
                        <li>1 salle de travail pour les professeurs</li>
                        <li>1 lounge pour les professeurs</li>
                        <li>2 locaux pour la direction et les services administratifs</li>
                    </ul>
                </div>
                <p className="text-lg leading-relaxed text-gray-700">
                    L’école dispose d’aires de jeu spécifiques pour les enfants du cycle maternel, séparées des enfants du primaire et du secondaire. Les constructions répondent aux normes de résistance en cas de secousses sismiques.
                </p>
            </section>

            {/* Structure de Gestion de l’École */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold text-orange-600">Structure de Gestion de l’École</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                    Les membres fondateurs de KIM'S sont Yannick Kimanuka et Ussen Kimanuka. Avec le soutien d’un conseil d’administration et de conseillers pédagogiques, ils déterminent les grandes orientations stratégiques, approuvent les budgets et assurent le recrutement des cadres de l’école. Le CA de l’école se réunit 3 fois par an.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                    L’école est gérée au quotidien par un chef d’établissement, assisté d’une équipe administrative/financière.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                    KIM'S apporte une importance particulière à l’avis des parents et les invite à participer à la vie de l’école à travers une collaboration avec le corps pédagogique et l’organisation d’évènements (fêtes scolaires), spectacles, activités extrascolaires, voyages, etc. Le comité se réunit régulièrement avec la direction et une assemblée générale se tient une fois par an, dans le courant du mois de septembre.
                </p>
            </section>

            {/* Les Membres Fondateurs de KIM'S */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold text-orange-600">Les Membres Fondateurs de KIM'S</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Yannick Kimanuka</li>
                    <li>Ussen Kimanuka</li>
                </ul>
            </section>

            {/* Organigramme */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold text-orange-600">Organigramme</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">Conseil d'administration</h3>
                        <ul className="list-disc list-inside text-gray-700 ml-4">
                            <li>Conseillers (juristes, financiers, psychopédagogues, stratégie)</li>
                            <li>Direction</li>
                            <li>Administration/Finance (secrétariat)</li>
                            <li>Superviseur de site</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">Comité des Parents</h3>
                        <ul className="list-disc list-inside text-gray-700 ml-4">
                            <li>Direction</li>
                            <li>Administration/Finance (secrétariat)</li>
                            <li>Superviseur de site</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">Les Enseignants</h3>
                        <p className="text-lg leading-relaxed text-gray-700">
                            Des enseignants qualifiés sont recrutés à travers le monde sur base de leurs compétences, leurs expériences et leurs valeurs. Les meilleurs enseignants congolais sont aussi recrutés dans plusieurs villes de la RDC pour offrir un enseignement de qualité répondant aux exigences des meilleures écoles internationales.
                        </p>
                    </div>
                </div>
            </section>

            {/* Uniforme Section */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold text-orange-600">Uniforme</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* First Column */}
                    <div className="bg-black text-white p-6">
                        <p>Dans les cycles primaire, l'uniforme est obligatoire du lundi au vendredi, à l'exception du mercredi.</p>
                        <p className="mt-4">L'uniforme dans le primaire est constitué d’une jupe bleue marine et une chemise bleu ciel pour les filles ; un bermuda bleu marine et une chemise bleu ciel pour les garçons.</p>
                    </div>

                    {/* Second Column */}
                    <div className="bg-orange-500 text-white p-6">
                        <p>Dans le cycle maternel, l'uniforme est obligatoire du lundi au vendredi, à l'exception du mercredi.</p>
                        <p className="mt-4">L'uniforme dans le maternel est constitué d’une jupe noire et une chemise orange pour les filles ; un bermuda noir et une chemise orange pour les garçons.</p>
                    </div>

                    {/* Third Column */}
                    <div className="bg-gray-100 text-gray-800 p-6">
                        <p>L'uniforme est payant et il est fourni par CS.KIM'S, qui veille à fournir des tissus de premier choix avec des coupes précises et solides.</p>
                        <p className="mt-4">Un logo brodé de KIM'S est cousu sur la poche de la chemise.</p>
                    </div>

                    {/* Fourth Column */}
                    <div className="bg-green-500 text-white p-6 flex flex-col justify-between">
                        <p>Dans le cycle maternel, les enfants n'ont pas d'uniforme mais portent un tablier payant et fourni par l'école.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
