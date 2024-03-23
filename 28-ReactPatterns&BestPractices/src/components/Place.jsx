export default function Place({ image, title, description }) {
  return (
      <article className='place hover'>
        <img src={image} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </article>
  );
}
