// @ts-nocheck  // removes annoying parameter any type messages for file
export default function Section({title, children, ...props}) {
  return (
    // spread operator ... and custom name (props) passes over any remaining props such as id and className
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}
