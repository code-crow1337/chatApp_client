import { createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { TUsername } from '../../types';
import rootReducer from './reducers';

const saveToLocalStorage = (state:any):void => {
  try {
    const saveToStorage = JSON.stringify(state);
    localStorage.setItem('persistantState', saveToStorage)
  } catch (e) {
    console.error(e);
  }
} 

const loadFromLocalStorage = ():TUsername | undefined=> {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if(serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.error(e);
    return undefined; 
  }
}

const store = createStore(rootReducer, loadFromLocalStorage(),composeWithDevTools());

store.subscribe(() => saveToLocalStorage(store.getState()));
export default store; 