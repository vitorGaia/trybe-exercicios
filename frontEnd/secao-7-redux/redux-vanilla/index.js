import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

// capturando elementos html
const counterDisplay = document.getElementsByClassName('counter-display')[0];
const incrementBtn = document.getElementsByClassName('increment-btn')[0];

// criando o reducer com o estado inicial
const INITIAL_STATE = { count: 0 }
const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'INCREMENT_COUNT') {
    return { count: state.count += 1 }
  }
  return state;
}

// criando a store ja com redux devtools
const store = createStore(reducer, composeWithDevTools());

// criando a action
const action = { type: 'INCREMENT_COUNT' };

// disparando a nossa action
incrementBtn.addEventListener('click', () => {
  store.dispatch(action);
})

// lendo as alterações do estado
store.subscribe(() => {
  const { count } = store.getState();
  counterDisplay.innerHTML = count;
})