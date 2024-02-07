// @ts-nocheck  // removes annoying parameter any type messages for file
export default function Tabs({ children, buttons, CustomTag = 'menu' }) {
  // to pass a custom HTML element, its paremeter must be set with a Capital letter, or saved in constant with a Capital letter
  // default value is set to menu and will only be passed as an argument when a different tag is needed
  return (
    <>
      <CustomTag>{buttons}</CustomTag>
      {children}
    </>
  );
}
