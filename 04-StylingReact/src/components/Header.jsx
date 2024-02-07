import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 md-8 md:mb-16">
      <img
        src={logo}
        alt="A canvas"
        className="w-44 h-44 mb-8 object-contain"
      />
      <h1 className="text-xl md:text-4xl text-center font-semibold tracking-widest uppercase text-amber-800 font-custom">
        ReactArt
      </h1>
      <p className="text-stone-500">A community of artists and art-lovers.</p>
    </header>
  ); // in tailwind you can add md: (medium devices) so the style is only applied to those devices and a default is applied otherwise
}
