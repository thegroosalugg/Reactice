import css from './page.module.css';

// loading.js is another reserved file name, this component will render if the page next to it, or any nested pages are fetching data

export default function LoadingPage() {
  return <p className={css.loading}>Loading Meals...</p>;
}
