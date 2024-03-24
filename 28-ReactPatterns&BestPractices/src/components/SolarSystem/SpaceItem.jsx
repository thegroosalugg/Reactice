export default function SpaceItem({ image, name, summary }) {
  return (
    <article className="space-item">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{summary}</p>
    </article>
  );
}
