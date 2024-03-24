export default function SpaceItem({ image, name, summary }) {
  return (
    <article
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2>{name}</h2>
      <p>{summary}</p>
    </article>
  );
}
