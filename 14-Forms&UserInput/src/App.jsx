import Header from './components/Header.jsx';
import Signup from './components/Signup.jsx';
import StateLogin from './components/StateLogin.jsx'
import RefLogin from './components/RefLogin.jsx'
import { useState } from 'react';
import FormSelector from './components/FormSelector.jsx';

function App() {
  const [formType, setFormType] = useState();

  function handleFormType(type) {
    setFormType(type)
  }

  return (
    <>
      <Header />
      <main>
        <FormSelector onSet={handleFormType} />
        {formType === 'signup' && <Signup />}
        {formType === 'state' && <StateLogin />}
        {formType === 'ref' && <RefLogin />}
      </main>
    </>
  );
}

export default App;
