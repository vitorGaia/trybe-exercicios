import PropTypes from 'prop-types';
import lida from '../images/Ícone de e-mail lido.svg';
import naoLida from '../images/Ícone de e-mail não lido.svg';

const UNREAD = 0;
const READ = 1;

function List({ messages, setMessageStatus }) {
  return(
    <ul className="messages-list">
      {
        messages.map((message) => {
          const messageClass = message.status === READ
          ? 'message-read'
          : 'message-unread';

          return (
            <li key={ message.id }>
              <p
              className={ `message-title ${messageClass}` }
              >
                { message.title }

              </p>

              <div>
              <button
                type="button"
                title="Marcar como lida"
                onClick={ () => setMessageStatus(message.id, READ) }
              >
                <img src={ lida } alt="" />
              </button>
              <button
                type="button"
                title="Marcar como não lida"
                onClick={ () => setMessageStatus(message.id, UNREAD) }
              >
                <img src={ naoLida } alt="" />
              </button>
            </div>
            </li>
          )
        })
      }
    </ul>
  )
}

List.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      status: PropTypes.number,
    }),
  ).isRequired,
};

export { List, READ, UNREAD };