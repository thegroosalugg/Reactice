export default function Universe({ spaceRock }) {
  return (
    <div>
      {Object.keys(spaceRock).map((key, index) => (
        <div key={index}>
          <span>{key}: </span>
          <span>{spaceRock[key]}</span>
        </div>
      ))}
    </div>
  );
}
