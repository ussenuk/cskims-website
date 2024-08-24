import React from 'react';
import Image1 from '../Images/a1.png'
import Image2 from '../Images/a2.png'
import Image3 from '../Images/2.jpg'
import Image4 from '../Images/22.jpg'
import Image5 from '../Images/a5.png'

function Card() {
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    
        <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src={Image4} alt="Educational excursion"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Aider l'enfant à avoir confiance en soi</div>
                <p className="text-gray-700 text-base">
                Comme la confiance en soi, l’estime de soi se développe dès l’enfance. Elle repose sur la conscience de sa valeur personnelle. Une bonne estime de soi permet donc de reconnaître ses forces et ses limites et d’avoir une image positive de soi. Le sentiment de confiance permet de croire en ses capacités de réussir; il donne la force d’affronter différentes situations et de prendre des risques.
                </p>
            </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Confiance</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#efforts</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#échecs</span>
        </div>
        </div>
        
        <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src={Image3} alt="River"/>
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Éducation moderne pour tous</div>
            <p className="text-gray-700 text-base">
            En tant qu’originaire de cette partie, nous avions décidé de pallier tant soit peu ce déficit qui nuit à l’éducation des
enfants en créant alors deux écoles respectant les différentes normes tant nationales qu’internationales avec le but de
donner une formation scolaire de bonne qualité
             </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Rural</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Remote</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Village</span>
        </div>
    </div>

    
    <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src={Image1} alt="Forest"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Balade en pleine nature</div>
        <p className="text-gray-700 text-base">
        Pour les enfants, en particulier, voyager peut être un moyen puissant et tactile d'accroître leur compréhension interculturelle tout en développant de l'empathie pour les autres et un sentiment d'indépendance personnelle. Les voyages peuvent également permettre aux enfants de développer des compétences de vie essentielles — patience, flexibilité, confiance et estime de soi. </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Promenade</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Exibution</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Rendonerr</span>
      </div>
    </div>
  </div>
  )
}

export default Card