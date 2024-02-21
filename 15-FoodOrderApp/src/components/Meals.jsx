export default function Meals({ meals }) {
  return <section id="">
    <ul className="">
      {meals.map((meal) => <li key={meal.id}>{meal.name}</li>)}
    </ul>
  </section>
}
