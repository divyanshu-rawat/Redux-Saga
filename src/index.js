import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Sagas/sagas';
import { Reducer } from './Reducer/reducer';
// import { Counter } from './Components/counter';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  Reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);

// const action = type => store.dispatch({type})

ReactDOM.render(
 <Provider store={store}>
	<App />
 </Provider>
, document.getElementById('root'));

