import ReactImg from '../../assets/react-core-concepts.png'; // import images from assets folder
import './Header.css'

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

// @ts-ignore // disables annoying parameter any type message for function
function genRandomInt(max) {
  // random number generator
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={ReactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
