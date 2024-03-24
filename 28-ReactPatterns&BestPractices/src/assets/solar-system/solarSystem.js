import sunImg from './Sun.jpg';
import mercuryImg from './Mercury.jpg';
import venusImg from './Venus.jpg';
import earthImg from './Earth.jpg';
import marsImg from './Mars.jpg';
import jupiterImg from './Jupiter.jpg';
import saturnImg from './Saturn.jpg';
import uranusImg from './Uranus.jpg';
import neptuneImg from './Neptune.jpg';
import plutoImg from './Pluto.jpg';

export const SOLARSYSTEM = [
  {
    name: 'Sun',
    image: sunImg,
    diameter: '1,391,000 km',
    distanceFromEarth: '149.6 million km',
    temperature: '5,500°C (surface)',
    composition: 'Mainly hydrogen and helium',
  },
  {
    name: 'Mercury',

    image: mercuryImg,
    diameter: '4,880 km',
    distanceFromSun: '57.9 million km',
    orbitalPeriod: '88 days',
    composition: 'Rocky surface',
  },
  {
    name: 'Venus',

    image: venusImg,
    diameter: '12,104 km',
    distanceFromSun: '108.2 million km',
    orbitalPeriod: '225 days',
    composition: 'Thick atmosphere of carbon dioxide with clouds of sulfuric acid',
  },
  {
    name: 'Earth',

    image: earthImg,
    diameter: '12,742 km',
    distanceFromSun: '149.6 million km',
    orbitalPeriod: '365.25 days',
    composition: 'Rocky surface with oceans of liquid water',
  },
  {
    name: 'Mars',

    image: marsImg,
    diameter: '6,779 km',
    distanceFromSun: '227.9 million km',
    orbitalPeriod: '687 days',
    composition: 'Iron-rich core with a rocky surface and polar ice caps',
  },
  {
    name: 'Jupiter',

    image: jupiterImg,
    diameter: '139,822 km',
    distanceFromSun: '778.6 million km',
    orbitalPeriod: '11.9 years',
    composition: 'Primarily hydrogen and helium with a thick atmosphere',
  },
  {
    name: 'Saturn',

    image: saturnImg,
    diameter: '116,464 km',
    distanceFromSun: '1.4 billion km',
    orbitalPeriod: '29.5 years',
    composition: 'Gaseous outer layer and rocky core with spectacular rings',
  },
  {
    name: 'Uranus',

    image: uranusImg,
    diameter: '50,724 km',
    distanceFromSun: '2.9 billion km',
    orbitalPeriod: '84 years',
    composition: 'Mainly hydrogen and helium with an icy mantle',
  },
  {
    name: 'Neptune',

    image: neptuneImg,
    diameter: '49,244 km',
    distanceFromSun: '4.5 billion km',
    orbitalPeriod: '165 years',
    composition: 'Mainly hydrogen, helium, and icy materials',
  },
  {
    name: 'Pluto',

    image: plutoImg,
    diameter: '2,377 km',
    distanceFromSun: '5.9 billion km',
    orbitalPeriod: '248 years',
    composition: 'Rocky and icy surface',
  },
];
