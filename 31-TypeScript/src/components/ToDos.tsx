type ToDosProps = {
  items: string[]; // can comment this block out if using React.FC syntax
};

export default function ToDos({ items }: ToDosProps) {
// const ToDos = ({ items }: ToDosProps) => {                        // same as above, using constant instead of function
// const ToDos: React.FC<{ items: string[]}> = ({ items }) => {      // another syntax using React.FC, does not need Type declared at top

  return (
    <ul className='todos'>
      {items.map((item) => (
        <li key={item}>{item}</li>
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
// { assigns ToDos as a FC that expects to receive an object as props, that shoud have an items keys whose value is an array of strings }
