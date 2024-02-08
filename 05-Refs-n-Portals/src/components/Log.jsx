const formatter = (number) => number.toString().padStart(2, "0"); // adds leading zero to keep all styles in line with double digits

export default function Log({ scores }) {
  const reversedScores = [...scores].reverse().slice(0, 10); // Create a reversed copy of the scores array. Sliced at 10 scores max

  return (
    <ul id="log">
      {reversedScores.map((score, index) => (
        <li key={index}>
          Timer:{" "}
          <span style={{ color: "#46cebe" }}>{formatter(score.timer)}</span>{" "}
          seconds :: Score:{" "}
          <span style={{ color: "#46cebe" }}>{formatter(score.score)}</span>
        </li>
      ))}
    </ul>
  );
}
