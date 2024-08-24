import React from 'react';
import Image1 from '../Images/p1.png';
import Image2 from '../Images/p2.png';
import Image3 from '../Images/p3.png';
import Image4 from '../Images/p4.png';

function Testimonials() {
  return (
    <div class="container mx-auto px-2 py-2">
        <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
          Nos Partenaires
        </h2>
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/2 px-1 mb-2">
            <div class="bg-white rounded shadow py-2">
            <img className="w-full" src={Image1} alt="Forest"/>
              <p class="text-gray-800 text-base px-6 mb-5">Le prix Anzisha est la plus grande bourse d'affaires d'Afrique pour les plus jeunes entrepreneurs</p>
              <p class="text-gray-500 text-xs md:text-sm px-6">Gagnant 2019</p>
            </div>
          </div>
          <div class="w-full md:w-1/2 px-1 mb-2">
            <div class="bg-white rounded shadow py-2">
            <img className="w-full" src={Image2} alt="Forest"/>
            <p class="text-gray-800 text-base px-6 mb-5">Le concours de plan d'affaires à travers l'Académie africaine de leadership (African Leadership Academy)</p>
              <p class="text-gray-500 text-xs md:text-sm px-6">2019 Winner</p>
            </div>
          </div>
          <div class="w-full md:w-1/2 px-1 mb-2">
            <div class="bg-white rounded shadow py-2">
            <img className="w-full" src={Image3} alt="Forest"/>

            <p class="text-gray-800 text-base px-6 mb-5">Le prix Ubora – qui signifie «excellence» en swahili – a été créé pour promouvoir la performance sociale des PME dans l’est et l’ouest de la RDC.</p>
              
              <p class="text-gray-500 text-xs md:text-sm px-6">Gagnant 2023</p>
            </div>
          </div>
          <div class="w-full md:w-1/2 px-1 mb-2">
            <div class="bg-white rounded shadow py-2">
            <img className="w-full" src={Image4} alt="Forest"/>
              <p class="text-gray-800 text-base px-6 mb-5">Le concours de plan d'affaires (COPA) est une initiative du Projet d'appui au développement des micro, petites et moyennes entreprises (PADMPME)</p>
              <p class="text-gray-500 text-xs md:text-sm px-6">Gagnant 2021</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Testimonials