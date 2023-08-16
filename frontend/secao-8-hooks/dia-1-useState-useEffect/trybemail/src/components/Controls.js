import PropTypes from 'prop-types';
import lida from '../images/Ícone de e-mail lido.svg';
import naoLida from '../images/Ícone de e-mail não lido.svg';

function Controls({ markAllAsRead, markAllAsUnread }) {
  return (
    <div className="controls-container">
      <button
        type="button"
        onClick={ markAllAsRead }
      >
        <img src={ lida } alt="" />
        Marcar todas como lida
      </button>

      <button
        type="button"
        onClick={ markAllAsUnread }
      >
        <img src={ naoLida } alt="" />
        Marcar todas como não lida
      </button>
    </div>
  )
}

Controls.propTypes = {
  markAllAsRead: PropTypes.func.isRequired,
  markAllAsUnread: PropTypes.func.isRequired,
};

export default Controls;