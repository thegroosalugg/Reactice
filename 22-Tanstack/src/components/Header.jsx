import { useIsFetching } from "@tanstack/react-query";

export default function Header({ children }) {
  const fetching = useIsFetching(); // will state if React Query is fetching data anywhere in the app
  // fetching has value of 0 is no data is being fetched and a higher number if it is
  return (
    <>
      <div id='main-header-loading'>
        {/* progress is a built-in HTML element */}
        {fetching > 0 && <progress />}
      </div>
      <header id='main-header'>
        <div id='header-title'>
          <h1>React Events</h1>
        </div>
        <nav>{children}</nav>
      </header>
    </>
  );
}
