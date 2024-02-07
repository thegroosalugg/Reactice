// @ts-nocheck  // removes annoying parameter any type messages for file
// useState allows the dynamic rendering of content
import { useState } from "react";
import { EXAMPLES } from "../../data";
import Tabs from "../Tabs";
import TabButton from "./TabButton";
import Section from "../Section";

export default function Examples() {
  const [dynamicContent, setContent] = useState();
  // must always be declared at the top of the function where it is used and never nested in another function
  // default value can be set inside parenthesis. Here no default value is set

  function handleSelect(clickedButton) {
    setContent(clickedButton);
  }

  let tabContent = <p>Select a topic</p>; // default tabContent is set prior to rendering dynamicContent

  if (dynamicContent) {
    // if dynamicContent is set, via TabButton onClick then the below code is rendered
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[dynamicContent].title}</h3>
        <p>{EXAMPLES[dynamicContent].description}</p>
        <pre>
          <code>{EXAMPLES[dynamicContent].code}</code>
        </pre>
      </div>
    );
  }

    /* onClick passes argument to TabButton function
  arrow function activates when TabButton is executed
  arrow function executes handleSelect function above and passes along an argument, the name of selected button
  highlighted passed as an argument to TabButton, will pass if dynamicContent matches onClick,
  so 'active' CSS class is removed on non active topics

  Tabs is a component to render buttons inside a menu. Not very useful in this app but used anyway to demonstrate general
  reusable components React structure */

  return (
    <Section title="Examples" id="examples">
      <Tabs
        // CustomTag="menu" // structure kept to show how it would look, but a custom value of menu is already set.
        // the value can be a sting for built in components, or start with a Capital letter for custom components
        buttons={
          <>
            <TabButton
              highlighted={dynamicContent === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              highlighted={dynamicContent === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              highlighted={dynamicContent === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              highlighted={dynamicContent === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
