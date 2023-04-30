import React, { useState } from 'react';
import Email from './Email';
import emails from './data';
import './App.css';

function App() {
  const [ savedEmails, setEmails ] = useState(emails);

  return (
    <main>
      <h1>TrybeMail</h1>
      <div>
        <button>Marcar todas como lidas</button>
        <button>Marcar todas como não lidas</button>
        <div>
          { savedEmails.map((email, index) => <Email
          email={ email }
          key={ index }
          />) }
        </div>
      </div>
    </main>
  );
}

export default App;
