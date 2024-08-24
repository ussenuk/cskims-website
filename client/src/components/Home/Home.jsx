import React from 'react';
import Carousel from '../Carousel/Carousel';
import Grid from '../Home/Grid';
import Card from '../Home/Card';
import Testimonials from './Testimonials';
import Image1 from '../Images/1.jpg'
import Image2 from '../Images/4.jpeg'
import Image3 from '../Images/3.jpg'
import Image4 from '../Images/Kims.png'
import ServiceCard from './ServiceCard';

export default function Home() {
    let slides = [
        {image: Image1, content:"Le complexe scolaire KIM’S créé en 2018 est une école agréée par le ministère de l’éducation primaire, secondaire et Professionnel en République démocratique du Congo par l’arrêté ministériel N°MINEPSP/CABMIN/2900/2018 DU 08/09/2018 portant agrément et autorisation de fonctionnement des établissements privés d’enseignement maternel, primaire, secondaire et professionnel dans la province du Nord-Kivu. Cette école compte deux branches, il s’agit du Complexe scolaire KIM’S à Sake et du complexe scolaire KIM’S II à Goma."},
        {image: Image4, content:"Nous sommes sur le point de faire de l'impossible une réalité possible."},
        {image: Image2, content:"Un enfant, un professeur, un livre, un stylo, peuvent changer le monde."},
        {image:Image3, content:"Ce qui a commencé comme une idée, un rêve, il y a seulement 5 ans, s’est traduit en une chaine d’écoles remplie de plus de 600 enfants."},
        
      ];
    
      return (
        <div className="max-w-6xl mx-auto p-4">
          <Carousel slides={slides} />
          <ServiceCard />
          <Grid />
          <Card/>
          <Testimonials/>

        </div>
      );
}