import Email from './Email';
import emails from './data';
import './App.css';

function App() {
  return (
    <main>
      <h1>TrybeMail</h1>
      <div>
        <button>Marcar todas como lidas</button>
        <button>Marcar todas como não lidas</button>
        <div>
          { emails.map((email, index) => <Email
          email={ email }
          key={ index }
          />) }
        </div>
      </div>
    </main>
  );
}

export default App;
