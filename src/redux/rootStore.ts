import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const saveToLocalStorage = (state:any):void => {
 
  const dataToSave = {
    userlist:state.userlist,
    username:state.username, 
  }
  try {
    const saveToStorage = JSON.stringify(dataToSave);
    localStorage.setItem('persistantState', saveToStorage)
  } catch (e) {
    console.error(e);
  }
} 

const loadFromLocalStorage = ():any=> {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if(serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.error(e);
    return undefined; 
  }
}
const middleware = [ thunk]

const store = createStore(rootReducer,loadFromLocalStorage(), composeWithDevTools(applyMiddleware(...middleware)));

 store.subscribe(() => saveToLocalStorage(store.getState()));
export default store; 