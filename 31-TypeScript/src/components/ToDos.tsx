import ToDo from "../models/ToDo";
import ToDoItem from "./ToDoItem";

 // can comment this block out if using React.FC syntax
type props = {
  items: ToDo[]; // items expects an array[] of ToDo class objects
};

export default function ToDos({ items }: props) {
// const ToDos = ({ items }: props) => {                           // same as above, using constant instead of function
// const ToDos: React.FC<{ items: ToDo[]}> = ({ items }) => {      // another syntax using React.FC, does not need 'type' declared at the beginning

  return (
    <ul className='todos'>
      {/* destructure each item object to get id and text directly */}
      {items.map(({id, text}) => (
        <ToDoItem key={id} text={text} />
      ))}
    </ul>
  );
}

// export default ToDos // comment this in when using constant syntax instead of function

// React.FC Syntax explained:
// const ToDos: React.FC<{ items: string[]}> = ({ items }) => {

// React.FC: Type provided by the react library. FC = Function Component =>
//  { a generic type (a type that takes another type as a parameter) that describes the shape of a function component in React }

// <{ items: string[]}>: TS syntax for providing a type argument to a generic type =>
// { assigns ToDos as a FC that expects to receive an object as props, that shoud have an items key whose value is an array of strings }
