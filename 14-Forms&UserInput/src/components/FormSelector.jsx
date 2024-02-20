export default function FormSelector({ onSet }) {
  return (
    <div className="form-selector">
      <button className="button" onClick={() => onSet('signup')}>SignUp</button>
      <button className="button" onClick={() => onSet('state')}>State</button>
      <button className="button" onClick={() => onSet('ref')}>Ref</button>
    </div>
  );
}
