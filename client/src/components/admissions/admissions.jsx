import { useEffect, useRef } from "react";
import "./admissions.css";
import Image from "../Images/plan.png";
import Testimonials from '../Home/Testimonials';

function AdmissionPage() {
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
                <h1>INFRASTRUCTURE 
                DE L’ÉCOLE</h1>
            </div>

            {/* Infrastructure Details */}
            <section className="space-y-6">
                <h2 className="text-3xl font-semibold text-orange-600">Infrastructure futur de l'École</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg">
                    <li>21 salles de classe</li>
                    <li>1 auditoire pour 135 personnes</li>
                    <li>1 salle de danse/théâtre</li>
                    <li>1 bibliothèque avec plus de 8000 livres</li>
                    <li>1 salle d’exposition</li>
                    <li>1 terrain de basketball couvert pouvant accueillir près de 1000 personnes</li>
                    <li>1 terrain de mini-foot avec pelouse synthétique</li>
                    <li>1 infirmerie</li>
                    <li>2 vestiaires</li>
                    <li>1 salle de gymnastique</li>
                    <li>1 salle VIP</li>
                    <li>1 salle de travail pour les professeurs</li>
                    <li>1 lounge pour les professeurs</li>
                    <li>4 locaux pour la direction et les services administratifs</li>
                </ul>
            </section>

            {/* Bloc Administratif, Cafétéria, Bloc Scolaire, Centre culturel & Bibliothèque, World of Sport, Infrastructures sanitaires */}
<section className="space-y-6">
<h2 className="text-3xl font-semibold text-orange-600">Plan & Infrastructure</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* Bloc Administratif */}
    <div className="bg-gray-100 text-gray-800 p-6">
        <h3 className="text-2xl font-semibold text-orange-600">Bloc Administratif</h3>
        <p className="mt-4">Situé à l’entrée de l’école, le bâtiment administratif comprend les bureaux de la direction et de l’administration ainsi qu’un espace de travail et de détente pour le corps enseignant. Comme tous les autres bâtiments de l’école, il sera équipé d’énergie solaire et d’un système de collecte des eaux de pluie pour limiter l’impact environnemental et assurer une autonomie au projet.</p>
    </div>

    {/* Cafétéria */}
    <div className="bg-green-500 text-white p-6">
        <h3 className="text-2xl font-semibold">Cafétéria</h3>
        <p className="mt-4">Située à proximité du complexe sportif, la cafétéria aura une cuisine moderne aux normes internationales et pourra fournir à manger à tous les élèves et au staff. La cuisine utilisera principalement les produits frais de la région pour promouvoir l’économie locale et pour assurer aux élèves une bonne hygiène alimentaire.</p>
    </div>

    {/* Bloc Scolaire */}
    <div className="bg-orange-500 text-white p-6">
        <h3 className="text-2xl font-semibold">Bloc Scolaire</h3>
        <p className="mt-4">Le bâtiment scolaire est composé de 21 classes sur trois niveaux, chaque étage comprend 5 grandes classes et 2 classes de tailles moyennes pour les cours d’options. Le bâtiment aura des salles réservées notamment à l’agronomie, à la conservation de la nature, la protection de l’environnement, en complément des autres matières classiques.  L’infrastructure pourra accueillir plus de 500 élèves. Les salles de classes seront ultra-équipées pour répondre aux exigences de l’enseignement de qualité que KIS souhaite offrir.</p>
    </div>

    {/* Centre culturel & Bibliothèque */}
    <div className="bg-blue-400 text-gray-800 p-6">
        <h3 className="text-2xl font-semibold text-orange-600">Centre culturel & Bibliothèque</h3>
        <p className="mt-4">Le centre culturel et média est conçu pour favoriser la créativité. L’entrée est composée de panneaux de verre offrant une vue spectaculaire sur le lac Kivu et les montagnes. A l’extrémité des escaliers, la construction offre aussi un espace de détente pour les élèves. Une bibliothèque et un centre informatique sont situés à l’étage alors qu’un studio de danse, un auditoire pour les conférences et les projections sont situés au rez-de-chaussée. Ce bâtiment offrira aux élèves l’opportunité d’améliorer leurs apprentissages à travers des méthodes indépendantes de recherche.</p>
    </div>

    {/* World of Sport */}
    <div className="bg-black text-white p-6">
        <h3 className="text-2xl font-semibold">World of Sport</h3>
        <p className="mt-4">Le complexe sportif “World of Sport” comprend plusieurs infrastructures sportives dont un terrain de mini-foot en pelouse synthétique, un terrain de basketball couvert avec un revêtement en plastique et des gradins rétractables, des vestiaires, une salle de gym et une infirmerie.</p>
        <p className="mt-4">Ce complexe sportif sera utilisé pour les cours de sport et pour d’autres activités extra-scolaires.</p>
    </div>

    {/* Infrastructures sanitaires */}
    <div className="bg-yellow-500 text-white p-6">
        <h3 className="text-2xl font-semibold">Infrastructures sanitaires</h3>
        <p className="mt-4">Il existera 34 toilettes sur le site de KIMS dont 18 pour les élèves et 16 pour le corps pédagogique. Les sanitaires sont adaptés en fonction de l’âge des enfants et respectent le genre.</p>
        <p className="mt-4">L’école dispose d’aires de jeu spécifiques pour les enfants du cycle maternel, séparées des enfants du primaire et du secondaire. Les constructions répondent aux normes de résistance en cas de secousses sismiques.</p>
    </div>
</div>
</section>

<Testimonials/>

        </div>
  );
}

export default AdmissionPage;
