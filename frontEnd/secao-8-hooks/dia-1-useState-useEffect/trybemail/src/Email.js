import React, { useState } from 'react';
import './Email.css';

const Email = (props) => {
  let [ status, setStatus ] = useState(props.email.status);

  return (
    <div>
      <p className={ status === 0 && 'texto-nao-lido' }>{ props.email.title }</p>

      <button onClick={ () => setStatus(status = 1) }>
        Lido
      </button>

      <button onClick={ () => setStatus(status = 0) }>
        Não Lido
      </button>
    </div>
  )
};

export default Email;