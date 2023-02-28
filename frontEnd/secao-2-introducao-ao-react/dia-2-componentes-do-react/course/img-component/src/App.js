/* import React from 'react';
import staringCat from './staringCat.jpg';
import Image from './Image';

class App extends React.Component {
  render() {
    return (
      <main>
        <Image souce={ staringCat } alternativeText="Cute cat staring"/>
      </main>
    );
  }
}

export default App; */

import React from 'react';
import Image from './Image';

function App() {
  const URL = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';
  return (
    <main>
      <Image source={ URL } alternativeText="Cute cat staring" />
    </main>
  );
}

export default App;
