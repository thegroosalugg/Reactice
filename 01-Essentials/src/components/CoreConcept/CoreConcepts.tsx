import { CORE_CONCEPTS } from "../../data"
import CoreConcept from "./CoreConcept"
import Section from "../Section"

export default function CoreConcepts() {
  return (
    <Section title ="Core Concepts" id="core-concepts">
    <ul>
      {/* original code below. Core concepts transformed into an iterator
      key is currently not required, but is set as it is read by React */}
      {CORE_CONCEPTS.map((conceptItem) => (
        <CoreConcept key={conceptItem.title} {...conceptItem} />
      ))}
    </ul>
  </Section>
  )
}

// ORIGINAL CoreConcept code for reference to see what it looks like in full

/* <CoreConcept {...CORE_CONCEPTS[0]} />
   <CoreConcept {...CORE_CONCEPTS[1]} />
   <CoreConcept {...CORE_CONCEPTS[2]} /> */


// same function as below

/* <CoreConcept
     title={CORE_CONCEPTS[3].title}
     description={CORE_CONCEPTS[3].description}
     image={CORE_CONCEPTS[3].image}
   /> */
